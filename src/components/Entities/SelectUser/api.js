import axios from 'axios'

export const getUsers = async (query) => {
    return axios
        .get(`https://jsonplaceholder.typicode.com/users${query}`)
        .then((res) => res.data)
}
