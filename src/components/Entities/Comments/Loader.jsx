import { Skeleton } from '@mui/material'
import React from 'react'

function Loader() {
    return (
        <div style={{ marginInline: 'auto', width: '500px' }}>
            <Skeleton variant="rectangular" height={180} sx={{ mb: '20px' }} />
            <Skeleton variant="rectangular" height={180} sx={{ mb: '20px' }} />
            <Skeleton variant="rectangular" height={180} sx={{ mb: '20px' }} />
            <Skeleton variant="rectangular" height={180} sx={{ mb: '20px' }} />
            <Skeleton variant="rectangular" height={180} sx={{ mb: '20px' }} />
        </div>
    )
}

export default Loader
