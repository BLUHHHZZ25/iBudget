
import { Q } from '@nozbe/watermelondb'
import { adapter, database } from '../adapters'

const postsCollection = database.get('posts')

database
adapter

// Create a new post
export const createPost = async ({ title, subtitle, body, isPinned = false }:{ title:any, subtitle:any, body: any, isPinned: boolean}) => {
  return await database.write(async () => {
    const post = await postsCollection.create(post => {
      post.title = title
      post.subtitle = subtitle
      post.body = body
      post.isPinned = isPinned
    })
    return post
  })
}

// Read: Get all posts
export const getAllPosts = async () => {
  return await postsCollection.query().fetch()
}

// // Read: Get a post by ID
// export const getPostById = async (id) => {
//   return await postsCollection.find(id)
// }

// // Update a post by ID
// export const updatePost = async (id, { title, subtitle, body, isPinned }) => {
//   const post = await postsCollection.find(id)
//   return await database.write(async () => {
//     if (title !== undefined) post.title = title
//     if (subtitle !== undefined) post.subtitle = subtitle
//     if (body !== undefined) post.body = body
//     if (isPinned !== undefined) post.isPinned = isPinned
//     return post
//   })
// }

// // Delete a post by ID
// export const deletePost = async (id) => {
//   const post = await postsCollection.find(id)
//   return await database.write(async () => {
//     await post.markAsDeleted()  // soft delete, you can also use destroyPermanently()
//   })
// }
