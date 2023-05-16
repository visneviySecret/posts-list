import { Breadcrumbs, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { getPath } from './utils'
import { useAlert } from 'react-alert'

function DefaultLayout({ children }) {
    const location = useLocation()
    const { postId } = useParams()
    const alert = useAlert()

    useEffect(() => {
        alert.info(`Current page is: ${location.pathname}`)
    }, [location])

    const path = getPath(location, postId)

    return (
        <div>
            <Breadcrumbs aria-label="breadcrumb" sx={{ mb: '50px' }}>
                {path.map((pathItem, index) => {
                    if (path.length === index + 1) {
                        return (
                            <Typography color="text.primary" key={index}>
                                {pathItem.title}
                            </Typography>
                        )
                    }
                    return (
                        <Link
                            key={index}
                            underline="hover"
                            color="inherit"
                            to={pathItem.url}
                        >
                            {pathItem.title}
                        </Link>
                    )
                })}
            </Breadcrumbs>
            <div>{children}</div>
        </div>
    )
}

export default DefaultLayout
