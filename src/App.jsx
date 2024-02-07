import axios from 'axios'
import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [products, setProducts] = useState([])

  const instance = axios.create({
    baseURL: 'https://fakestoreapi.com/products',
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' },
  })

  useEffect(() => {
    instance
      .get()
      .then(function (response) {
        console.log(response.data)
        setProducts(response.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error)
      })
  }, [])

  return (
    <>
      <h1 className="text-3xl font-bold underline">Products</h1>
      {products.map((p) => {
        return <li key={p.id}>{p.title}</li>
      })}
    </>
  )
}

export default App
