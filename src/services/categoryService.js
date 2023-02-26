// Get all categories
import api from './api'
const getAllCategories = async () => {
  try {
    const response = await api.get('/categories')
    if (response.status === 200) {
      return response.data
    }
  } catch (error) {
    console.log(error)
  }
}

let categoriesService = {
  getAllCategories,
}

export default categoriesService
