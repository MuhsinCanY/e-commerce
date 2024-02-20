import Clients from '../component/client/Clients'
import ProductBestSeller from '../component/product/ProductBestSeller'
import ProductDescription from '../component/product/ProductDescription'
import ProductHeader from '../component/product/ProductHeader'

export default function Product() {
  return (
    <div>
      <ProductHeader />
      <ProductDescription />
      <ProductBestSeller />
      <Clients bg="bg-[#FAFAFA]" />
    </div>
  )
}
