import React, { useState } from 'react'
import Address from '../component/order/Address'
import Payment from '../component/order/Payment'

export default function Order() {
  const [isAddress, setIsAddress] = useState(true)

  return (
    <div className="container flex gap-4 flex-col w-full py-12">
      <div className="flex">
        <button
          autoFocus
          onClick={() => setIsAddress(true)}
          className={`${
            isAddress ? 'bg-blue-200 font-semibold' : 'bg-blue-50 font-normal'
          } basis-1/2 rounded-lg rounded-r-none`}
        >
          <div className="flex p-8">
            <p className=" focus:text-blue-500 text-xl">Address Information</p>
          </div>
        </button>
        <button
          autoFocus
          onClick={() => setIsAddress(false)}
          className={`${
            !isAddress ? 'bg-blue-200 font-semibold' : 'bg-blue-50 font-normal'
          } basis-1/2 rounded-lg rounded-l-none`}
        >
          <div className="flex p-6">
            <p className=" focus:text-blue-500 text-xl">Payment Options</p>
          </div>
        </button>
      </div>

      {isAddress ? <Address /> : <Payment />}
    </div>
  )
}
