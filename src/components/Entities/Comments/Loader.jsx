import { Skeleton } from '@mui/material'
import React from 'react'

function Loader() {
    return (
        <div>
            <Skeleton
                variant="rectangular"
                width="100%"
                height={180}
                sx={{ mb: '20px' }}
            />
            <Skeleton
                variant="rectangular"
                width="100%"
                height={180}
                sx={{ mb: '20px' }}
            />
            <Skeleton
                variant="rectangular"
                width="100%"
                height={180}
                sx={{ mb: '20px' }}
            />
            <Skeleton
                variant="rectangular"
                width="100%"
                height={180}
                sx={{ mb: '20px' }}
            />
            <Skeleton
                variant="rectangular"
                width="100%"
                height={180}
                sx={{ mb: '20px' }}
            />
        </div>
    )
}

export default Loader
