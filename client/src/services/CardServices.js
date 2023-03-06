import Client from './api'

export const GetCards = async () => {
  try {
    const res = await Client.get('/cards/list')
    return res.data
  } catch (error) {
    throw error
  }
}
