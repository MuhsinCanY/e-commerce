import { useDispatch, useSelector } from 'react-redux'
import {
  decreaseCountAction,
  deleteToCartAction,
  increaseCountAction,
  updateCartAction,
} from '../../store/actions/shoppingActions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'

export default function ShoppingCartMain() {
  const { cart } = useSelector((state) => state.shoppingReducer)
  const dispatch = useDispatch()

  const handleCheckbox = (item) => {
    console.log(item, !item.checked)
    const newItem = { ...item, checked: !item.checked }
    dispatch(updateCartAction(newItem))
  }

  return (
    <div>
      <h1 className="font-bold text-3xl pb-8">My Cart</h1>
      <div className="flex flex-col gap-4">
        {cart.map((c, i) => {
          return (
            <div
              key={i}
              className="flex justify-between items-center gap-4 border-2 border-blue-200 rounded-lg pl-4 pr-6 py-3"
            >
              <input
                className="rounded cursor-pointer border-2 border-blue-300 checked:bg-blue-400 hover:bg-blue-400 hover:text-blue-400 focus:outline-none focus:border-0 focus:bg-blue-300 checked:outline-none checked:focus:outline-none"
                type="checkbox"
                checked={c.checked}
                onChange={() => {
                  handleCheckbox(c)
                }}
              ></input>

              <img
                src={c.product.images[0].url}
                className="h-[110px] w-[70px] "
              />
              <div className="flex flex-col w-1/2">
                <p className="text-dark font-bold">{c.product.name}</p>
                <p className="text-t-2">{c.product.description}</p>
              </div>
              <div className="flex justify-center items-center gap-2 border-2 border-blue-200 rounded-xl">
                <button
                  onClick={() => {
                    dispatch(increaseCountAction(c))
                  }}
                  className="bg-blue-200 text-white px-2 py-2 rounded-l-md"
                >
                  <FontAwesomeIcon icon={faPlus} />
                </button>
                <p className="w-[15px] text-center font-semibold">{c.count}</p>
                <button
                  onClick={() => {
                    dispatch(decreaseCountAction(c))
                  }}
                  className="bg-blue-200 text-white px-2 py-2 rounded-r-md"
                >
                  <FontAwesomeIcon icon={faMinus} />
                </button>
              </div>
              <p className="font-semibold w-[60px] text-center">
                ${(c.product.price * c.count).toFixed(2)}
              </p>
              <div
                onClick={() => {
                  dispatch(deleteToCartAction(c))
                }}
                className="cursor-pointer text-red-300 transform hover:scale-110 transition-transform duration-500"
              >
                <FontAwesomeIcon icon={faTrash} />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
