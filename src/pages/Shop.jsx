import React from 'react'
import Categorys from '../component/category/Categorys'
import FilterRow from '../component/FilterRow'
import ProductList from '../component/products/ProductList'
import Pagination from '../component/Pagination'
import Clients from '../component/client/Clients'

export default function Shop() {
  return (
    <div>
      <Categorys />
      <FilterRow />
      <ProductList />
      <Pagination />
      <Clients />
    </div>
  )
}
