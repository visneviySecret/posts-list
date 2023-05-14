import React from 'react'
import { Divider, ListItem, ListItemButton, ListItemText } from '@mui/material'
import { getPostLink } from './utils'
import { Link } from 'react-router-dom'

function Post({ post, index }) {
    return (
        <Link to={getPostLink(post)}>
            <ListItem sx={{ padding: '0' }}>
                <ListItemButton>
                    <ListItemText sx={{ marginRight: '20px' }}>
                        {index + 1}
                    </ListItemText>
                    <ListItemText
                        primary={post.title}
                        secondary={
                            <>
                                <span>{post.body}</span>
                                <br />
                                <span>Author: {post.name}</span>
                            </>
                        }
                    ></ListItemText>
                </ListItemButton>
            </ListItem>
            <Divider variant="inset" component="li" />
        </Link>
    )
}

export default Post
