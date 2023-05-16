import { Skeleton } from '@mui/material'
import React from 'react'

function Loader() {
    return (
        <div style={{ marginInline: 'auto', width: '500px' }}>
            <Skeleton animation="wave" variant="rectangular" height={140} />
            <Skeleton
                animation="wave"
                variant="text"
                sx={{ fontSize: '1rem' }}
            />
            <Skeleton
                animation="wave"
                variant="text"
                sx={{ fontSize: '1rem' }}
            />
            <Skeleton
                animation="wave"
                variant="text"
                sx={{ fontSize: '1rem' }}
            />
            <Skeleton
                animation="wave"
                variant="text"
                sx={{ fontSize: '1rem' }}
            />
            <Skeleton
                animation="wave"
                variant="text"
                sx={{ fontSize: '1rem' }}
            />
        </div>
    )
}

export default Loader
