import axios from 'axios'

const secretariaApi = axios.create({
    baseURL: "http://127.0.0.1:8000/api/secretarios/alumnos/"
})

export const getAllAlumnos = () => secretariaApi.get()


export const createAlumnos = (alumno) => secretariaApi.post("",alumno)

export const editarAlumno = (dni, data) => {
    return axios.patch(`http://localhost:8000/api/secretarios/alumnos/${dni}/`, data);
  };