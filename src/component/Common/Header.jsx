import React from 'react'
import {
  faEnvelope,
  faHeart,
  faUser,
} from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBasketShopping,
  faMagnifyingGlass,
  faPhone,
} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom/cjs/react-router-dom.min'
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'

export default function Header() {
  return (
    <>
      <div className="custom-container-out font-[Montserrat] font-bold text-[14px] bg-t-3">
        <div className="custom-container-in w-[1300px] gap-10 min-w-max justify-between items-center text-white">
          <div className="flex gap-4 items-center">
            <p>
              <FontAwesomeIcon icon={faPhone} /> (225) 555-0118
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} /> michelle.rivera@example.com
            </p>
          </div>

          <p>Follow Us and get a chance to win 80% off</p>

          <div className="flex gap-3 items-center">
            <p>Follow Us :</p>
            <div className="flex items-center gap-2 text-[16px]">
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faYoutube} />
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faTwitter} />
            </div>
          </div>
        </div>
      </div>
      <div className="custom-container-out font-[Montserrat] font-bold bg-white">
        <div className="custom-container-in w-[1300px] gap-10 justify-between items-center">
          <div className="flex gap-4">
            <Link
              to="/"
              className="text-t-3 text-2xl tracking-wide min-w-[140px]"
            >
              Bandage
            </Link>
            <nav className="flex gap-6 items-center text-t-2 ">
              <NavLink activeClassName="selected" to="/" exact>
                Home
              </NavLink>
              <NavLink activeClassName="selected" to="/shopping">
                Shop
              </NavLink>
              <NavLink activeClassName="selected" to="/about">
                About
              </NavLink>
              <NavLink activeClassName="selected" to="/3">
                Blog
              </NavLink>
              <NavLink activeClassName="selected" to="/contact">
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
    </>
  )
}
