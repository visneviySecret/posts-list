import axios from 'axios'

export const postComment = async (payload) =>
    await axios.post('https://jsonplaceholder.typicode.com/posts', payload)
