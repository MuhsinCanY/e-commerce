import { useEffect } from 'react'
import ReactPaginate from 'react-paginate'
import { useDispatch, useSelector } from 'react-redux'
import { getFiltredProductsAction } from '../store/actions/productActions'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

export default function Pagination({ category, gender, filter, sort, page }) {
  const dispatch = useDispatch()
  const history = useHistory()
  const { productList } = useSelector((store) => store.productReducer)
  const itemsPerPage = 12

  const pageCount = Math.ceil(productList.total / itemsPerPage)

  useEffect(() => {}, [page])

  const handlePageClick = (event) => {
    history.push(`/shopping/${gender}/${category}/${event.selected + 1}`)
    dispatch(
      getFiltredProductsAction(
        category,
        filter,
        sort,
        event.selected * itemsPerPage
      )
    )
    window.scrollTo(0, 500)
  }
  return (
    <div className="flex justify-center bg-white">
      <ReactPaginate
        currentPage={page}
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
      />
    </div>
  )
}
