import axios from 'axios'

export const getAllAlumnos = () => {
    return axios.get('http://localhost:8000/secretaria/api/secretaria/')
} 
