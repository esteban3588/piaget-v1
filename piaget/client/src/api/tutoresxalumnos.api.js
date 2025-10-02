import axios from 'axios'

const tutoresxalumnosApi = axios.create({
    baseURL: "http://127.0.0.1:8000/api/secretarios/alumnosxtutores/"
})

