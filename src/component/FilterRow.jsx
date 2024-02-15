import {
  faChevronDown,
  faListUl,
  faTable,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function FilterRow() {
  return (
    <div className="custom-container-out pt-10 bg-white">
      <div className="custom-container-in justify-between items-center font-[Montserrat] font-bold text-[14px] text-[#737373] px-[70px]">
        <p>Showing all 12 results</p>
        <div className="flex gap-2 items-center">
          <p className="pr-2">Views:</p>
          <FontAwesomeIcon
            icon={faTable}
            className="text-t-3 size-4 p-[10px] border-1 border-[#ECECEC] rounded cursor-pointer"
          />

          <FontAwesomeIcon
            icon={faListUl}
            className="text-t-3 size-4 p-[10px] border-1 border-[#ECECEC] rounded cursor-pointer"
          />
        </div>
        <div className="flex gap-2">
          <button className="text-[#737373] font-normal  bg-[#F9F9F9] border-1 border-[#ECECEC] px-4 py-[10px] rounded">
            Popularity <FontAwesomeIcon icon={faChevronDown} />
            {/* https://mui.com/material-ui/react-menu/ */}
          </button>
          <button className="bg-[#23A6F0] text-white  px-4 py-[10px] rounded">
            Filter
          </button>
        </div>
      </div>
    </div>
  )
}
