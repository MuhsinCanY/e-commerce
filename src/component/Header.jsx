import React from 'react'
import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBasketShopping,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom/cjs/react-router-dom.min'

export default function Header() {
  return (
    <div className="custom-container-out font-[Montserrat] font-bold">
      <div className="custom-container-in gap-10 justify-between items-center">
        <div className="flex gap-4">
          <Link to="/" className=" text-2xl tracking-wide min-w-[140px]">
            Bandage
          </Link>
          <nav className="flex gap-6 items-center text-t-2 ">
            <NavLink activeClassName="selected" to="/" exact>
              Home
            </NavLink>
            <NavLink activeClassName="selected" to="/1">
              Shop
            </NavLink>
            <NavLink activeClassName="selected" to="/2">
              About
            </NavLink>
            <NavLink activeClassName="selected" to="/3">
              Blog
            </NavLink>
            <NavLink activeClassName="selected" to="/4">
              Contact
            </NavLink>
            <NavLink activeClassName="selected" to="/5">
              Pages
            </NavLink>
          </nav>
        </div>
        <div className="flex gap-6 items-center text-t-1">
          <p className="min-w-max">
            <FontAwesomeIcon icon={faUser} /> Login / Register
          </p>
          <p>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </p>
          <p className="min-w-max">
            <FontAwesomeIcon icon={faBasketShopping} /> 1
          </p>
          <p className="min-w-max">
            <FontAwesomeIcon icon={faHeart} /> 1
          </p>
        </div>
      </div>
    </div>
  )
}
