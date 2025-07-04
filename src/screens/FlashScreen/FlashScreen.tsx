import React, { useEffect, useState } from 'react';
import { Button, FlatList, Text, View } from "react-native";
import { database } from '../../db/adapters';
import { colors } from '../../themes/theme';

const postsCollection = database.get('posts')


export default function FlashScreen() {

    return(
        <View>

            <Text style={{color:colors.background}}>Login Screen</Text>
            <Button 
                title='create post'

                onPress={() => {
                }}
            />
        </View>
    )  
}