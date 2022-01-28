import api from './apiConfig'

export const getExpenses = async () => {
  try {
      const response = await api.get('/expense')
      return response.data
  } catch (error) {
      throw error
  }
}

export const getExpense = async id => {
  try {
      const response = await api.get(`/expense/${id}`)
      return response.data
  } catch (error) {
      throw error
  }
}

export const createExpense = async expense => {
  try {
      const response = await api.post('/expense', expense)
      return response.data
  } catch (error) {
      throw error
  }
}

export const updateExpense = async (id, expense) => {
  try {
      const response = await api.put(`/expense/${id}`, expense)
      return response.data
  } catch (error) {
      throw error
  }
}

export const deleteExpense = async id => {
  try {
      const response = await api.delete(`/expense/${id}`)
      return response.data
  } catch (error) {
      throw error
  }
}