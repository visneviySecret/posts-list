import React, { useEffect, useState } from 'react'
import { getPosts } from './api'
import { List } from '@mui/material'
import { getPostsWithAuthors, getQuery } from './utils'
import { getAuthors } from '../Author/api'
import Post from '../../Shared/Post/Post'
import Loader from '../Comments/Loader'
function Posts({ user }) {
    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const query = getQuery(user)
        fetchPosts(query)
    }, [user])

    const fetchPosts = async (query) => {
        try {
            setIsLoading(true)
            const fetchedPosts = await getPosts(query)
            const authors = await getAuthors()
            const postsWithAuthors = getPostsWithAuthors(fetchedPosts, authors)
            setPosts(postsWithAuthors)
            setIsLoading(false)
        } catch {
            throw new Error(`Can not get posts response from server`)
        }
    }

    if (isLoading) {
        return <Loader />
    }

    return (
        <List
            sx={{
                width: '100%',
                maxWidth: 700,
                bgcolor: 'background.paper',
            }}
        >
            {posts.map((post, index) => (
                <Post post={post} index={index} key={post.id} />
            ))}
        </List>
    )
}

export default Posts
