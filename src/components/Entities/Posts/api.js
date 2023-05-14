import axios from 'axios'

export const getPosts = async (query) => {
    return axios
        .get(`https://jsonplaceholder.typicode.com/posts${query}`)
        .then((res) => res.data)
}
