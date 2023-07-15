import axios from 'axios'

const url = axios.create({
    baseURL: 'http://localhost:8000/tasks/api/v1/tasks/'
})

export const getTasks = () => {
    return url.get('/')
}

export const createTask = (task) => {
    return url.post('/', task)
}

export const updateTask = (task) => {
    return url.put(`/${task.id}/`, task)
}

export const deleteTask = (id) => {
    return url.delete(`/${id}/`)
} 