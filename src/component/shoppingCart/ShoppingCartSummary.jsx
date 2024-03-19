import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTotalPriceAction } from '../../store/actions/shoppingActions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function ShoppingCartSummary() {
  const { cart, totalPrice } = useSelector((state) => state.shoppingReducer)
  const dispatch = useDispatch()
  const [discountCode, setDiscountCode] = useState('')
  const [isDiscounted, setisDiscounted] = useState(false)

  useEffect(() => {
    dispatch(setTotalPriceAction())
  }, [cart])

  useEffect(() => {
    setisDiscounted(false)
  }, [discountCode])

  const handleDiscountCode = () => {
    console.log('disssss', discountCode)
    if (discountCode == 'CAN10') {
      setisDiscounted(true)
    } else {
      setisDiscounted(false)
    }
  }

  const calcTotalPrice = () => {
    return (
      Number(totalPrice) -
      (isDiscounted ? Number(totalPrice) / 10 : 0) +
      (Number(totalPrice) < 200 ? (Number(totalPrice) != 0 ? 19.9 : 0) : 0)
    ).toFixed(2)
  }

  return (
    <div className="flex flex-col border-2 bg-gray-50 rounded-lg px-4 py-8 font-semibold">
      <h1 className=" text-xl pb-8">Order Summary</h1>
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <p className="text-t-2">Products Price:</p>
          <p className="text-dark ml-auto">${totalPrice}</p>
        </div>
        {Number(totalPrice) != 0 && (
          <div className="flex justify-between items-center">
            <p className="text-t-2">Cargo Price:</p>
            <p className="text-dark ml-auto">$19.99</p>
          </div>
        )}

        {totalPrice > 200 && (
          <div className="flex justify-between items-center">
            <p className="text-t-2 ">Free Cargo:</p>
            <p className="ml-auto text-red-400">-$19.99</p>
          </div>
        )}
        {isDiscounted && (
          <div className="flex justify-between items-center">
            <p className="text-t-2">Discount %10:</p>
            <p className="ml-auto text-red-400">
              -${(totalPrice / 10).toFixed(2)}
            </p>
          </div>
        )}
        <div className="mt-4 h-[2px] bg-slate-300"></div>
        <div className="flex justify-between items-center ">
          <p className="text-t-2 ">Total Price:</p>
          <p className="text-red-400 ml-auto font-[18px]">
            ${calcTotalPrice()}
          </p>
        </div>
        <div
          className="flex justify-end
         font-medium text-sm text-t-2 rounded-lg "
        >
          <input
            placeholder="Discount Code..."
            type="text"
            className="w-full py-1 rounded-lg rounded-r-none bg-[#F9F9F9] border-blue-300 hover:border-blue-400"
            onChange={(e) => {
              setDiscountCode(e.target.value)
            }}
          ></input>
          <button
            onClick={handleDiscountCode}
            className="bg-blue-300 hover:bg-blue-400 md:p-4 p-3 text-white rounded-lg rounded-l-none"
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
        <div className="flex justify-center rounded-lg  items-center mt-6 bg-blue-400 hover:bg-blue-500 transform hover:scale-110 transition-transform duration-500">
          <Link
            to="/order"
            className="text-white text-lg py-3 w-full tracking-wider text-center"
          >
            Next Step
          </Link>
        </div>
      </div>
    </div>
  )
}
