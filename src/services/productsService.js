import api from './api'

// Get all products
const getAllProducts = async () => {
  try {
    const response = await api.get('/products')
    if (response.status === 200) {
      return response.data
    }
  } catch (error) {
    console.log(error)
  }
}

// Get product by id
const getProductById = async (id) => {
  try {
    const response = await api.get(`/products/${id}`)
    if (response.status === 200) {
      return response.data
    }
  } catch (error) {
    console.log(error)
  }
}

// search products
const searchProducts = async (query) => {
  try {
    const response = await api.get(`/products?q=${query}`)
    if (response.status === 200) {
      return response.data
    }
  } catch (error) {
    console.log(error)
  }
}

// Get products by categor
const getProductsByCategory = async (category) => {
  try {
    const response = await api.get(`/products?category=${category}`)
    if (response.status === 200) {
      return response.data
    }
  } catch (error) {
    console.log(error)
  }
}



// Add new product
const addNewProduct = async (product) => {
  try {
    const response = await api.post('/products', product)
    if (response.status === 201) {
      return response.data
    }
  } catch (error) {
    console.log(error)
  }
}

// Update product
const updateProduct = async (id, product) => {
  try {
    const response = await api.put(`/products/${id}`, product)
    if (response.status === 200) {
      return response.data
    }
  } catch (error) {
    console.log(error)
  }
}

// Delete product
const deleteProduct = async (id) => {
  try {
    const response = await api.delete(`/products/${id}`)
    if (response.status === 200) {
      return response.data
    }
  } catch (error) {
    console.log(error)
  }
}

let productsService = {
  getAllProducts,
  getProductById,
  searchProducts,
  getProductsByCategory,
  addNewProduct,
  updateProduct,
  deleteProduct,
}

export default productsService
