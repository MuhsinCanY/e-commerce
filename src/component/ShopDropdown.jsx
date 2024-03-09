import { useEffect, useRef } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategoriesAction } from '../store/actions/globalActions'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const ShopDropdown = () => {
  const [toggle, setToggle] = useState(false)
  const categories = useSelector((store) => store.globalReducer.categories)
  const dispatch = useDispatch()
  const dropdownRef = useRef()

  const toggleMenu = () => {
    setToggle(!toggle)
  }

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setToggle(false)
    }
  }

  useEffect(() => {
    dispatch(getCategoriesAction())
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [dispatch])

  return (
    <div ref={dropdownRef} className="text-t-2 font-[Montserrat]">
      <button
        onClick={toggleMenu}
        id="mega-menu-dropdown-button"
        data-dropdown-toggle="mega-menu-dropdown"
        className="flex items-center justify-between w-full  font-bold text-t-2  md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0  md:p-0  md:dark:hover:bg-transparent dark:border-gray-700"
      >
        Shop{' '}
        <svg
          className="w-2.5 h-2.5 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      <div
        id="mega-menu-dropdown"
        className={`${
          toggle ? 'grid' : 'hidden'
        } absolute z-50 pb-3  w-auto grid-cols-2 text-sm bg-white border border-gray-100 rounded-lg shadow-md dark:border-gray-700 md:grid-cols-2 dark:bg-gray-700`}
      >
        <div className="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
          <ul className="space-y-4" aria-labelledby="mega-menu-dropdown-button">
            <p className="text-dark font-bold dark:text-gray-400 cursor-pointer">
              Erkek
            </p>
            {categories
              .filter((category) => category.gender == 'e')
              .map((category, index) => {
                const path = category.code.split(':')
                return (
                  <li key={index}>
                    <Link
                      to={`/shopping/${path[0]}/${category.id}/1`}
                      className="text-gray-500 dark:text-gray-400 cursor-pointer"
                      onClick={() => setToggle(false)}
                    >
                      {category.title}
                    </Link>
                  </li>
                )
              })}
          </ul>
        </div>
        <div className="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
          <ul className="space-y-4">
            <p className="text-dark font-bold dark:text-gray-400 cursor-pointer">
              Kadın
            </p>
            {categories
              .filter((category) => category.gender == 'k')
              .map((category, index) => {
                const path = category.code.split(':')
                return (
                  <li key={index} className="">
                    <Link
                      to={`/shopping/${path[0]}/${category.id}/1`}
                      className="text-gray-500 dark:text-gray-400 cursor-pointer hover:text-dark"
                      onClick={() => setToggle(false)}
                    >
                      {category.title}
                    </Link>
                  </li>
                )
              })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ShopDropdown
