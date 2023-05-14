import { Skeleton } from '@mui/material'
import React from 'react'

function Loader() {
    return (
        <div>
            <Skeleton
                animation="wave"
                variant="rectangular"
                width="100%"
                height={140}
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
            <Skeleton
                animation="wave"
                variant="text"
                sx={{ fontSize: '1rem' }}
            />
        </div>
    )
}

export default Loader
