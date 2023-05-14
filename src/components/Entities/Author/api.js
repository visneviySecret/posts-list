import axios from 'axios'

export const getAuthors = async () => {
    return axios
        .get(`https://jsonplaceholder.typicode.com/users`)
        .then((res) => res.data)
}

export const getAuthor = async (id) => {
    return axios
        .get(`https://jsonplaceholder.typicode.com/users?id=${id}`)
        .then((res) => res.data)
}
