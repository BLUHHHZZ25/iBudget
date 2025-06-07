import React, { useEffect, useState } from 'react';
import { Button, FlatList, Text, View } from "react-native";
import { createPost, getAllPosts } from '../../db/queries/postTask';
import { withObservables } from '@nozbe/watermelondb/react'
import { database } from '../../db/adapters';
import { PostData } from '../../types/postTypes';


const postsCollection = database.get('posts')


export default function LoginScreen() {
    console.log(" hello screen");
    const [data, setData] = useState<any>("")
    
    async function handleCreatePost({title, subtitle, body, isPinned=false}:PostData) {
        createPost({"title": title, "subtitle": subtitle, body:"sadfa", "isPinned": isPinned})
    }

    const [posts, setPosts] = useState<any>([])

    useEffect(() => {
      const subscription = postsCollection.query().observe().subscribe(setPosts)
      return () => subscription.unsubscribe()
    }, [])

    return(
        <View>

            <Text>Login Screen</Text>
            <Button 
                title='create post'

                onPress={() => {
                    
                }}
            />
            <FlatList
                data={posts}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return(
                        <Text>
                            {item.title}
                        </Text>
                    )
                }}
            />
        </View>
    )
}