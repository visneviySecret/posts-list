import axios from 'axios'

export const getPosts = () => {
    return axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then((req) => req.data)
}
