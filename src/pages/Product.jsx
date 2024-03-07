import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import Clients from '../component/client/Clients'
import ProductBestSeller from '../component/product/ProductBestSeller'
import ProductDescription from '../component/product/ProductDescription'
import ProductHeader from '../component/product/ProductHeader'

export default function Product() {
  const { category, productId, slug } = useParams()

  console.log(category, productId, slug)
  return (
    <div>
      <ProductHeader />
      <ProductDescription />
      <ProductBestSeller />
      <Clients bg="bg-[#FAFAFA]" />
    </div>
  )
}
