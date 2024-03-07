import { useState } from 'react'
import Categorys from '../component/category/Categorys'
import FilterRow from '../component/FilterRow'
import ProductList from '../component/products/ProductList'
import Pagination from '../component/Pagination'
import Clients from '../component/client/Clients'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'

export default function Shop() {
  const { gender, category, page } = useParams()

  console.log('gender > ', gender, '---', 'category > ', category, 'page', page)

  const [filter, setFilter] = useState('')
  const [sort, setSort] = useState('')

  return (
    <div>
      <Categorys />
      <FilterRow
        category={category}
        filter={filter}
        setFilter={setFilter}
        sort={sort}
        setSort={setSort}
      />
      <ProductList
        category={category}
        filter={filter}
        sort={sort}
        page={page}
      />
      <Pagination
        category={category}
        gender={gender}
        filter={filter}
        sort={sort}
        page={page}
      />
      <Clients />
    </div>
  )
}
