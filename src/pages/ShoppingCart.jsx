import ShoppingCartMain from '../component/shoppingCart/ShoppingCartMain'
import ShoppingCartSummary from '../component/shoppingCart/ShoppingCartSummary'

export default function ShoppingCart() {
  return (
    <div className="container flex gap-4 py-6">
      <div className="basis-3/4  py-6 ">
        <ShoppingCartMain />
      </div>
      <div className="basis-1/4 bg-t-2 py-6">
        <ShoppingCartSummary />
      </div>
    </div>
  )
}
