import App from './components/Pages/App/App.jsx'
import ErrorPage from './components/Pages/Error/Error.jsx'
import PostPage from './components/Pages/PostPage/PostPage.jsx'
import { createBrowserRouter } from 'react-router-dom'

export const baseUrl = '/posts-list'

export const router = createBrowserRouter([
    {
        path: baseUrl,
        element: <App />,
        errorElement: <ErrorPage />,
    },
    {
        path: `${baseUrl}/post/:postId`,
        element: <PostPage />,
        errorElement: <ErrorPage />,
    },
])
