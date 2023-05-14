import React, { useEffect, useState } from 'react'
import { Card, CardContent, Typography } from '@mui/material'
import { getAuthor } from './api'

function Author({ postId }) {
    const [author, setAuthor] = useState(null)

    useEffect(() => {
        fetchPost(postId)
    }, [])

    const fetchPost = async (id) => {
        try {
            const result = await getAuthor(id)
            setAuthor(result[0])
        } catch {
            throw new Error('Can not get author information from server')
        }
    }

    if (!author) return <div>Loading...</div>

    return (
        <Card variant="outlined" sx={{ maxWidth: '500px', mb: '20px' }}>
            <CardContent>
                <Typography component="h5" sx={{ fontSize: 24 }}>
                    Author:
                </Typography>
                <Typography
                    sx={{ mb: 1.5, color: '#c746a7' }}
                    color="text.secondary"
                >
                    {author.name}
                </Typography>
                <Typography variant="body2" sx={{ textAlign: 'left' }}>
                    User name: {author.username}
                </Typography>
                <Typography variant="body2" sx={{ textAlign: 'left' }}>
                    Email: {author.email}
                </Typography>
                <Typography variant="body2" sx={{ textAlign: 'left' }}>
                    Phone: {author.phone}
                </Typography>
                <Typography variant="body2" sx={{ textAlign: 'left' }}>
                    Website: {author.website}
                </Typography>
                <Typography variant="body2" sx={{ textAlign: 'left' }}>
                    Company: {author.company.name}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Author
