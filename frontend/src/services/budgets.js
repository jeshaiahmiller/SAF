import api from './apiConfig'

export const getBudgets = async () => {
  try {
      const response = await api.get('/budget')
      return response.data
  } catch (error) {
      throw error
  }
}

export const getBudget = async id => {
  try {
      const response = await api.get(`/budgets/${id}`)
      return response.data
  } catch (error) {
      throw error
  }
}

export const createBudget = async budget => {
  try {
      const response = await api.post('/budgets', budget)
      return response.data
  } catch (error) {
      throw error
  }
}

export const updateBudget = async (id, budget) => {
  try {
      const response = await api.put(`/budgets/${id}`, budget)
      return response.data
  } catch (error) {
      throw error
  }
}

export const deleteBudget = async id => {
  try {
      const response = await api.delete(`/budgets/${id}`)
      return response.data
  } catch (error) {
      throw error
  }
}