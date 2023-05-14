import { Breadcrumbs, Typography } from '@mui/material'
import React from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { getPath } from './utils'

function DefaultLayout({ children }) {
    const location = useLocation()
    const { postId } = useParams()

    const path = getPath(location, postId)

    return (
        <div>
            <Breadcrumbs aria-label="breadcrumb" sx={{ mb: '50px' }}>
                {path.map((pathItem, index) =>
                    path.length === index + 1 ? (
                        <Typography color="text.primary" key={index}>
                            {pathItem.title}
                        </Typography>
                    ) : (
                        <Link
                            key={index}
                            underline="hover"
                            color="inherit"
                            to={pathItem.url}
                        >
                            {pathItem.title}
                        </Link>
                    )
                )}
            </Breadcrumbs>
            <div>{...children}</div>
        </div>
    )
}

export default DefaultLayout
