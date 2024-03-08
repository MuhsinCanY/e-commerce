import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'
import { deleteToCartAction } from '../store/actions/shoppingActions'

export default function CartDropdown() {
  const dispatch = useDispatch()
  const { cart } = useSelector((state) => state.shoppingReducer)
  return (
    <div className="absolute w-[300px]  top-10 right-10 z-50 bg-white p-6 rounded border border-gray-100">
      <div className="flex flex-col">
        <div>
          <h2 className="text-dark">My Cart</h2>
        </div>
        {cart.length == 0 && <p className="pt-3">Your Cart is Empty...</p>}
        {cart.map((c, i) => {
          return (
            <div
              key={i}
              className="flex items-center gap-3 font-normal px-1 py-2"
            >
              <div>
                <img
                  src={c.product.images[0].url}
                  className="width-[50px] h-[120px] object-contain"
                />
              </div>
              <div className="flex flex-col">
                <p className="font-semibold">{c.product.name}</p>
                <p className="text-[14px]">Count: {c.count}</p>
                <p>Price: ${c.product.price.toFixed(2)}</p>
              </div>
              <div
                onClick={() => {
                  dispatch(deleteToCartAction(c))
                }}
                className="cursor-pointer text-red-400 transform hover:scale-110 transition-transform duration-500"
              >
                <FontAwesomeIcon icon={faTrash} />
              </div>
            </div>
          )
        })}
      </div>
      {cart.length != 0 && (
        <button
          onClick={() => {
            console.log('Go to the Orderrr')
          }}
          className="bg-t-1 text-white rounded text-center px-2 py-1"
        >
          Complete Order
        </button>
      )}
    </div>
  )
}
