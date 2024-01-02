import axios from 'axios'

const taskAPI = axios.create({
  baseURL: 'http://localhost:8000/tasks/api/v1/tasks/'
})
export const getAllTask = () => {
  return taskAPI.get('/')
}

export const getTask = (id) => {
  return taskAPI.get(`/${id}`)
}

export const createTask = (task) => {
  return taskAPI.post('/', task)
}

export const deleteTask = (id) => {
  return taskAPI.delete(`/${id}`)
}

export const updateTask = (id, task) => {
  return taskAPI.put(`/${id}/`, task)
}