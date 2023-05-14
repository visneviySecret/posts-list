import React, { useEffect, useState } from 'react'
import { getPosts } from './api'
import { List } from '@mui/material'
import { getPostsWithAuthors, getQuery } from './utils'
import { getAuthors } from '../Author/api'
import Post from '../../Shared/Post/Post'

function Posts({ user }) {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const query = getQuery(user)
        fetchPosts(query)
    }, [])

    const fetchPosts = async (query) => {
        try {
            const fetchedPosts = await getPosts(query)
            const authors = await getAuthors()
            const postsWithAuthors = getPostsWithAuthors(fetchedPosts, authors)
            setPosts(postsWithAuthors)
        } catch {
            throw new Error(`Can not get posts response from server`)
        }
    }

    return (
        <List
            sx={{ width: '100%', maxWidth: 700, bgcolor: 'background.paper' }}
        >
            {posts.map((post, index) => (
                <Post post={post} index={index} key={post.id} />
            ))}
        </List>
    )
}

export default Posts
