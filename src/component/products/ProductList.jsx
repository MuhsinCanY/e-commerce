import { useEffect } from 'react'
import ProductCard from './ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsAction } from '../../store/actions/productActions'
import { Spinner } from 'react-bootstrap'

export default function ProductList({ category }) {
  const { productList } = useSelector((store) => store.productReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProductsAction((category = category)))
    console.log(productList)
    console.log('productList', category)
  }, [category])

  return (
    <div className="bg-white py-16">
      <div className="container flex justify-center">
        <div className="flex flex-col font-[Montserrat] font-bold">
          <div className="flex justify-center gap-3 flex-wrap">
            {productList.products ? (
              productList.products.map((product, i) => {
                return <ProductCard key={i} product={product} />
              })
            ) : (
              <Spinner animation="border" className="size-30 " />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function ProductListHeader() {
  return (
    <div className="flex flex-col gap-2 p-4 mb-10">
      <div className="text-center text-[20px] font-normal tracking-wider text-t-2">
        Featured Products
      </div>
      <div className="text-center text-[24px] tracking-wider text-t-3">
        BESTSELLER PRODUCTS
      </div>
      <div className="text-center text-[14px]  font-normal tracking-wider text-t-2">
        Problems trying to resolve the conflict between{' '}
      </div>
    </div>
  )
}
