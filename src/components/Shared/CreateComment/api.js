import axios from 'axios'

export const postComment = (payload) =>
    axios
        .post('https://jsonplaceholder.typicode.com/posts', payload)
        .then((res) => console.log(res))
