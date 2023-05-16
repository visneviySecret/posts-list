import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { baseUrl } from '../../../router'

function BackButton() {
    return (
        <div style={{ textAlign: 'left' }}>
            <Button>
                <Link to={baseUrl}>Go back</Link>
            </Button>
        </div>
    )
}

export default BackButton
