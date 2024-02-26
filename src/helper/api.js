import axios from 'axios'
import { useState } from 'react'

const baseUrl = 'https://workintech-fe-ecommerce.onrender.com'

const instance = axios.create({
  baseURL: baseUrl,
  timeout: 5000,
  // headers: {'authentication': 'foobar'}
})

//erhan
export const createApiInstance = () => {
  // const token = localStorage.getItem('token')

  return axios.create({
    baseURL: 'https://workintech-fe-ecommerce.onrender.com',
    // headers: {
    //   Authorization: token,
    //   'X-LANG': 'TR',
    // },
  })
}

export let API = createApiInstance()
//

export const REQ_TYPES = Object.freeze({
  GET: 'get',
  POST: 'post',
  PUT: 'put',
  DELETE: 'delete',
})

export default function useAxios(initialData) {
  const [data, setData] = useState(initialData)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const doRequest = ({ endpoint, reqType, payload }) => {
    setLoading(true)

    const req = reqType ? reqType : REQ_TYPES.GET

    return instance[req](endpoint, payload)
      .then(function (response) {
        // handle success
        console.log(response)
        setData(response.data)
        return response
      })
      .catch(function (error) {
        // handle error
        console.log(error)
        setError(error)
      })
      .finally(function () {
        setLoading(false)
        // always executed
      })
  }

  return { data, setData, loading, error, doRequest, REQ_TYPES }
}
