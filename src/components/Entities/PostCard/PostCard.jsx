import React, { useEffect, useState } from 'react'
import { Card, CardContent, Typography } from '@mui/material'
import { getPost } from './api'
import { Skeleton } from '@mui/material'

function PostCard({ postId }) {
    const [post, setPost] = useState(null)

    useEffect(() => {
        fetchPost(postId)
    }, [])

    const fetchPost = async (id) => {
        try {
            const result = await getPost(id)
            setPost(result[0])
        } catch {
            throw new Error('Can not get post information from server')
        }
    }

    if (!post) {
        return <Skeleton variant="rectangular" width="100%" height={140} />
    }

    return (
        <Card
            variant="outlined"
            sx={{
                maxWidth: '500px',
                marginInline: 'auto',
                marginBottom: '20px',
            }}
        >
            <CardContent>
                <Typography component="h5" sx={{ fontSize: 24 }}>
                    Post:
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {post.title}
                </Typography>
                <Typography variant="body2" sx={{ textAlign: 'left' }}>
                    {post.body}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default PostCard
