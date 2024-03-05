import {
  faListUl,
  faMagnifyingGlass,
  faTable,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFiltredProductsAction } from '../store/actions/productActions'

const sortData = [
  { name: 'Sıralama', query: '' },
  { name: 'Fiyata Göre Artan', query: 'price:asc' },
  { name: 'Fiyata Göre Azalan', query: 'price:desc' },
  { name: 'Puana Göre Artan', query: 'rating:asc' },
  { name: 'Puana Göre Azalan', query: 'rating:desc' },
]

export default function FilterRow({ category }) {
  const dispatch = useDispatch()
  const { productList } = useSelector((store) => store.productReducer)

  const [filter, setFilter] = useState('')
  const [sort, setSort] = useState('')

  const handleSearch = () => {
    dispatch(getFiltredProductsAction(category, filter, sort))
  }

  return (
    <div className=" pt-10 bg-white">
      <div className="container flex w-full flex-wrap gap-10 justify-between items-center font-[Montserrat] font-bold text-[14px] text-[#737373] ">
        <p>Showing all {productList.total} results</p>
        <div className="flex gap-2 items-center">
          <p className="pr-2">Views:</p>
          <FontAwesomeIcon
            icon={faTable}
            className="text-t-3 size-4 p-[10px] border-1 border-[#ECECEC] rounded cursor-pointer"
          />

          <FontAwesomeIcon
            icon={faListUl}
            className="text-t-3 size-4 p-[10px] border-1 border-[#ECECEC] rounded cursor-pointer"
          />
        </div>
        <div>
          <form className="form-solid mx-auto flex items-center justify-center gap-2 max-w-[440px]">
            <div>
              <input
                type="text"
                value={filter}
                placeholder="Search..."
                onChange={(e) => {
                  setFilter(e.target.value)
                }}
                className="block w-full rounded-md bg-gray-200 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
              />
            </div>

            {filter.length > 0 && (
              <button
                onClick={() => {
                  dispatch(getFiltredProductsAction(category, ''))
                  setFilter('')
                }}
                type="button"
                className="text-t-3 rounded-md border-transparent "
              >
                X
              </button>
            )}
            <button
              onClick={handleSearch}
              type="button"
              className="px-2 h-[41.8px] rounded-md bg-t-3 text-white border-transparent focus:border-gray-500"
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </form>
        </div>
        <div className="flex gap-2">
          <select
            onChange={(e) => {
              setSort(e.target.value)
              dispatch(
                getFiltredProductsAction(category, filter, e.target.value)
              )
            }}
            className="block w-full rounded-md bg-gray-200 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
          >
            {sortData.map((item, i) => {
              return (
                <option key={i} value={item.query}>
                  {item.name}
                </option>
              )
            })}
          </select>
        </div>
      </div>
    </div>
  )
}
