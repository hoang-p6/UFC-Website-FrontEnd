import Client from './api'

export const GetReviews = async () => {
  try {
    const res = await Client.get('/reviews')
    return res.data
  } catch (error) {

  }
}