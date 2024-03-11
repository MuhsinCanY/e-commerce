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
      <div className="flex flex-col gap-4">
        {cart.map((c, i) => {
          return (
            <div
              key={i}
              className="flex flex-col lg:flex-row  justify-between items-center gap-8 border-2 border-blue-200 hover:border-blue-300 rounded-lg pl-4 pr-6 py-3"
            >
              <div className="flex  items-center gap-4">
                <input
                  className="rounded cursor-pointer border-2 border-blue-300 checked:bg-blue-200 checked:focus:bg-blue-200 hover:bg-blue-400 hover:text-blue-400 focus:outline-none focus:border-0 focus:bg-white  transform hover:scale-110 transition-transform duration-500 focus:ring-0"
                  type="checkbox"
                  checked={c.checked}
                  onChange={() => {
                    handleCheckbox(c)
                  }}
                ></input>

                <img
                  src={c.product.images[0].url}
                  className="object-contain h-[110px] w-[90px] transform hover:scale-110 transition-transform duration-500"
                />
                <div className="flex flex-col">
                  <p className="text-dark font-bold">{c.product.name}</p>
                  <p className="text-t-2 leading-6 h-12 overflow-hidden">
                    {c.product.description}
                  </p>
                </div>
              </div>
              <div className="flex justify-between gap-4 items-center">
                <div className="flex justify-between items-center ">
                  <button
                    onClick={() => {
                      dispatch(increaseCountAction(c))
                    }}
                    className="bg-blue-200 hover:bg-blue-300  text-white px-2 py-2 rounded-l-md transform hover:scale-110 transition-transform duration-500"
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                  <div className="px-2 py-2 border-2 border-blue-200 ">
                    <p className="w-[15px] text-center font-semibold leading-5">
                      {c.count}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      dispatch(decreaseCountAction(c))
                    }}
                    className="bg-blue-200 hover:bg-blue-300 text-white px-2 py-2 rounded-r-md transform hover:scale-110 transition-transform duration-500"
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
                  className="cursor-pointer text-red-300 hover:text-red-400 transform hover:scale-110 transition-transform duration-500"
                >
                  <FontAwesomeIcon icon={faTrash} />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
