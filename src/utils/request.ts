import Axios from 'axios'

const baseURL = '#'
const request = Axios.create({
  baseURL,
  timeout: 20000
})

request.interceptors.request.use(
    (response) => {
      return response
    },
    (error) => {
      return Promise.reject(error)
    }
)

request.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      if (error.response && error.response.data) {
        const code = error.response.status
        const msg = error.response.data.message
        console.error(`[Axios Error]`, error.response)
      } else {
        alert(`${ error }`)
      }
      return Promise.reject(error)
    }
)

export default request
