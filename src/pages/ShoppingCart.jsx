import ShoppingCartMain from '../component/shoppingCart/ShoppingCartMain'
import ShoppingCartSummary from '../component/shoppingCart/ShoppingCartSummary'

export default function ShoppingCart() {
  return (
    <div className="py-10">
      <h1 className="container font-bold text-2xl ">My Cart</h1>
      <div className="container flex-col tracking-wider  lg:flex-row flex gap-4 py-6">
        <div className="basis-2/3  ">
          <ShoppingCartMain />
        </div>
        <div className="basis-1/3">
          <ShoppingCartSummary />
        </div>
      </div>
    </div>
  )
}
