import React from 'react'
import Categorys from '../component/category/Categorys'
import FilterRow from '../component/FilterRow'
import ProductList from '../component/products/ProductList'
import Pagination from '../component/Pagination'
import Clients from '../component/client/Clients'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'

export default function Shop() {
  const { gender, category } = useParams()

  console.log('gender > ', gender, '---', 'category > ', category)

  return (
    <div>
      <Categorys />
      <FilterRow category={category} />
      <ProductList category={category} />
      <Pagination />
      <Clients />
    </div>
  )
}
