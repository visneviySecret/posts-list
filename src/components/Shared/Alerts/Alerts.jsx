import React from 'react'
import { transitions, positions } from 'react-alert'
import { Alert } from '@mui/material'

export const options = {
    position: positions.BOTTOM_LEFT,
    timeout: 4000,
    offset: '50px',
    transition: transitions.FADE,
}

export const AlertTemplate = ({ options, message }) => (
    <Alert severity={options.type} sx={{ m: '20px' }}>
        {message}
    </Alert>
)
