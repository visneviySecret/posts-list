import axios from 'axios'

export const getPost = async (id) => {
    return axios
        .get(`https://jsonplaceholder.typicode.com/posts?id=${id}`)
        .then((res) => res.data)
}
