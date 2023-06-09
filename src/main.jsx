import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { Provider as AlertProvider } from 'react-alert'
import { AlertTemplate, options } from './components/Shared/Alerts/Alerts'

const Root = () => (
    <React.StrictMode>
        <AlertProvider template={AlertTemplate} {...options}>
            <RouterProvider router={router} />
        </AlertProvider>
    </React.StrictMode>
)

const rootNode = document.getElementById('root')

ReactDOM.render(<Root />, rootNode)
