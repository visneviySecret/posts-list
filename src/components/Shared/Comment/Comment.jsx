import React from 'react'
import { CardContent, Paper, Typography } from '@mui/material'

function Comment({ name, body }) {
    return (
        <Paper elevation={3} sx={{ maxWidth: '500px', mb: '10px' }}>
            <CardContent>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {name}
                </Typography>
                <Typography
                    sx={{ mb: 1.5, textAlign: 'left' }}
                    color="text.secondary"
                    variant="body2"
                >
                    {body}
                </Typography>
            </CardContent>
        </Paper>
    )
}

export default Comment
