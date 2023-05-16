import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, Route } from 'react-router-dom'
import { router } from './router'
import { Provider as AlertProvider } from 'react-alert'
import { AlertTemplate, options } from './components/Shared/Alerts/Alerts'
import App from './components/Pages/App/App'
import PostPage from './components/Pages/PostPage/PostPage'

const Root = () => (
    <React.StrictMode>
        <AlertProvider template={AlertTemplate} {...options}>
            <RouterProvider router={router}>
                <Route exact path="/" component={App} />
                <Route exact path="/post/:postId" component={PostPage} />
            </RouterProvider>
        </AlertProvider>
    </React.StrictMode>
)

ReactDOM.createRoot(document.getElementById('root')).render(<Root />)
