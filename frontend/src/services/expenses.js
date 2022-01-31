import api from './apiConfig'

const getToken = () => {
  return new Promise((resolve) => {
    resolve(`Bearer ${localStorage.getItem("token") || null}`);
  });
};


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

    const token = await getToken();

    const headers = {
      headers: {
        Authorization: token,
      },
    };
      const response = await api.post('/expense/', expense, headers)
      return response.data
  } catch (error) {
      throw error
  }
}

export const updateExpense = async (id, expense) => {
  try {

    const token = await getToken();

    const headers = {
      headers: {
        Authorization: token,
      },
    };
      const response = await api.put(`/expense/${id}/`, expense, headers)
      return response.data
  } catch (error) {
      throw error
  }
}

export const deleteExpense = async id => {
  try {

    const token = await getToken();

    const headers = {
      headers: {
        Authorization: token,
      },
    };
      const response = await api.delete(`/expense/${id}`, headers)
      return response.data
  } catch (error) {
      throw error
  }
}