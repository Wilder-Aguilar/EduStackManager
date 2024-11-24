import axios from 'axios'
const API_URL = 'http://localhost:3000/api/courses'

//GET ALL COURSES
export const getAllCourses = async () => {
    try {
        const response = await axios.get(API_URL)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

//GET COURSE BY ID
export const getCourseById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`)
        return response.data
    } catch (error) {
        console.log(error)
    }
}   

//CREATE COURSE
export const createCourse = async (data) => {
    try {
        const response = await axios.post(API_URL, data)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

//UPDATE COURSE
export const updateCourse = async (id, data) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, data)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

//DELETE COURSE
export const deleteCourse = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`)
        return response.data
    } catch (error) {
        console.log(error)
    }
}   