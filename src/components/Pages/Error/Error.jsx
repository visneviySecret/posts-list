import { Button } from '@mui/material'
import { Link, useRouteError } from 'react-router-dom'

export default function ErrorPage() {
    const error = useRouteError()
    console.error(error)

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Этой страницы не существует.</p>
            <Button>
                <Link to={'/posts-list'}>Вернуться на домашнюю страницу.</Link>
            </Button>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}
