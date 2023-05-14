import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function BackButton() {
    return (
        <Button>
            <Link to="/">Go back</Link>
        </Button>
    )
}

export default BackButton