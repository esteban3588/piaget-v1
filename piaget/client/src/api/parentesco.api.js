import axios from 'axios'

const parentescoApi = axios.create({
    baseURL: "http://127.0.0.1:8000/api/secretarios/parentescos/"
})

export const getAllParentesco = () => parentescoApi.get()
