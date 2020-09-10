import axios from 'axios'

const apiClient = axios.create({
  //baseURL: 'https://x7rnmcy7zk.execute-api.us-east-1.amazonaws.com/prod',
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  headers: {
    
    'Content-Type': 'application/json'
  }
})

export default {
  getItems () {
    return apiClient.get('/items')
  }
}
