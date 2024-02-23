import React from 'react'

export default function Pagination() {
  return (
    <div className="custom-container-out py-10 bg-white">
      <div className="custom-container-in justify-center font-[Montserrat] font-bold text-[14px]">
        <div className="">
          <nav aria-label="Page navigation example ">
            <ul className="inline-flex -space-x-px text-base h-10">
              <li>
                <a
                  href="#"
                  className="h-[70px] flex items-center justify-center px-[15px] h-[70px] ms-0 leading-tight text-gray-500 bg-[#F3F3F3] border border-e-0 border-gray-300 rounded-s-lg"
                >
                  Previous
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-[15px] h-[70px] leading-tight text-gray-500 bg-white border border-gray-300 "
                >
                  1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-[15px] h-[70px] leading-tight text-gray-500 bg-white border border-gray-300 "
                >
                  2
                </a>
              </li>
              <li>
                <a
                  href="#"
                  aria-current="page"
                  className="flex items-center justify-center px-[15px] h-[70px] text-white border border-gray-300 bg-t-1"
                >
                  3
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-[15px] h-[70px] leading-tight text-gray-500 bg-white border border-gray-300 "
                >
                  4
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-[15px] h-[70px] leading-tight text-gray-500 bg-white border border-gray-300 "
                >
                  5
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-[15px] h-[70px] leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg "
                >
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}
