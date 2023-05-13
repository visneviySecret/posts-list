import React, { useEffect, useState } from 'react'
import { getPosts } from './api'
import {
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
} from '@mui/material'

function Posts() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetchPosts()
    }, [])

    const fetchPosts = async () => {
        try {
            const fetchedPosts = await getPosts()
            setPosts(fetchedPosts)
        } catch {
            throw new Error(`Can not request posts from server`)
        }
    }

    return (
        <List
            sx={{ width: '100%', maxWidth: 700, bgcolor: 'background.paper' }}
        >
            <Divider variant="inset" component="li" />
            {posts.map((post, index) => (
                <React.Fragment key={post.id}>
                    <ListItem sx={{ padding: '0' }}>
                        <ListItemButton>
                            <ListItemText sx={{ marginRight: '20px' }}>
                                {index + 1}
                            </ListItemText>
                            <ListItemText
                                primary={post.title}
                                secondary={post.body}
                            />
                        </ListItemButton>
                    </ListItem>
                    <Divider variant="inset" component="li" />
                </React.Fragment>
            ))}
        </List>
    )
}

export default Posts
