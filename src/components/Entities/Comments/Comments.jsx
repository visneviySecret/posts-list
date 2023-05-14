import React, { useEffect, useState } from 'react'
import { getComments } from './api'
import { List, Typography } from '@mui/material'
import Comment from '../../Shared/Comment/Comment'
import CreateComment from '../../Shared/CreateComment/CreateComment'
import Loader from './Loader'

function Comments({ postId }) {
    const [comments, setComments] = useState(null)

    useEffect(() => {
        fetchComments(postId)
    }, [])

    const fetchComments = async (id) => {
        try {
            const result = await getComments(id)
            setComments(result)
        } catch {
            throw new Error('Can not get comments information from server')
        }
    }

    if (!comments) return <Loader />

    return (
        <>
            <Typography component="h3" sx={{ fontSize: 24 }}>
                Comments:{' '}
            </Typography>

            <CreateComment />

            <List>
                {comments.map((comment) => (
                    <Comment
                        name={comment.name}
                        body={comment.body}
                        key={comment.id}
                    />
                ))}
            </List>
        </>
    )
}

export default Comments
