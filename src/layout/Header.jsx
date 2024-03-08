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
import { useDispatch, useSelector } from 'react-redux'
import Gravatar from 'react-gravatar'
import { exitUser } from '../store/actions/userActions'
import ShopDropdown from '../component/ShopDropdown'
import { useState } from 'react'
import CartDropdown from '../component/CartDropdown'

export default function Header() {
  const { cart } = useSelector((state) => state.shoppingReducer)
  const { response } = useSelector((store) => store.userReducer)
  const dispatch = useDispatch()
  const [cartToggle, setCartToggle] = useState(false)

  const handleExit = () => {
    dispatch(exitUser())
  }

  return (
    <>
      <div className="custom-container-out font-[Montserrat] font-bold text-[14px] bg-t-3">
        <div className="hidden lg:flex container flex flex-col lg:flex-row py-4 gap-8 min-w-max justify-between items-center text-white">
          <div className="flex gap-3 items-center">
            <div>
              <FontAwesomeIcon icon={faPhone} /> (225) 555-0118
            </div>
            <div>
              <FontAwesomeIcon icon={faEnvelope} /> michelle.rivera@example.com
            </div>
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
      <div className=" font-[Montserrat] font-bold bg-white">
        <div className="container flex flex-col lg:flex-row py-4 gap-10 justify-between items-center">
          <div className="flex gap-4">
            <Link
              to="/"
              className="text-t-3 text-2xl tracking-wide min-w-[140px]"
            >
              Bandage
            </Link>
          </div>
          <nav className="flex gap-3 items-center text-t-2 ">
            <NavLink activeClassName="selected" to="/" exact>
              Home
            </NavLink>
            <ShopDropdown />
            <NavLink activeClassName="selected" to="/about">
              About
            </NavLink>
            <NavLink activeClassName="selected" to="/contact">
              Contact
            </NavLink>
            <NavLink activeClassName="selected" to="/team">
              Team
            </NavLink>
          </nav>
          <div className="flex relative gap-6 items-center text-t-1">
            <div className="min-w-max">
              {response.token ? (
                <div className="flex gap-2 items-center">
                  <Gravatar email={response.email} className="size-6" />
                  <p>{response.name}</p>
                  <button onClick={handleExit}>Exit</button>
                </div>
              ) : (
                <div>
                  <FontAwesomeIcon icon={faUser} />{' '}
                  <Link to="/login">Login</Link> /{' '}
                  <Link to="/signup">Register</Link>
                </div>
              )}
            </div>
            <div>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
            <button
              className="min-w-max relative"
              onClick={() => {
                setCartToggle((p) => !p)
              }}
            >
              <FontAwesomeIcon icon={faBasketShopping} /> {cart.length}
            </button>
            {cartToggle && <CartDropdown />}
            <div className="min-w-max">
              <FontAwesomeIcon icon={faHeart} /> 1
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
