import App from './components/Pages/App/App.jsx'
import ErrorPage from './components/Pages/Error/Error.jsx'
import PostPage from './components/Pages/PostPage/PostPage.jsx'
import { BrowserRouter } from 'react-router-dom'
import { createBrowserHistory } from 'history'

const history = createBrowserHistory()

export const router = <BrowserRouter history={history} />
