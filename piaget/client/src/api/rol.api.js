import axios from 'axios'

const rolApi = axios.create({
    baseURL: "http://127.0.0.1:8000/api/roles/"
})

export const getRol = () => rolApi.get()