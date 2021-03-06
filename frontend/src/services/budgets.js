import api from './apiConfig'


const getToken = () => {
  return new Promise(resolve => {
      resolve(`Bearer ${localStorage.getItem('token') || null}`)
  })
}

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
      const response = await api.get(`/budget/${id}`)
      return response.data
  } catch (error) {
      throw error
  }
}

export const createBudget = async budget => {
  try {
    const token = await getToken();

    const headers = {
      headers: {
        Authorization: token,
      },
    };

      const response = await api.post('/budget/', budget, headers)
      return response.data
  } catch (error) {
      throw error
  }
}

export const updateBudget = async (id, budget) => {
  try {

    const token = await getToken();

    const headers = {
      headers: {
        Authorization: token,
      },
    };
      const response = await api.put(`/budget/${id}/`, budget, headers)
      return response.data
  } catch (error) {
      throw error
  }
}

export const deleteBudget = async id => {
  try {

    const token = await getToken();

    const headers = {
      headers: {
        Authorization: token,
      },
    };
      const response = await api.delete(`/budget/${id}/`, headers)
      return response.data
  } catch (error) {
      throw error
  }
}