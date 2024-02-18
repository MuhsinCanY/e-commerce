import React from 'react'
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function Footer() {
  return (
    <>
      <div className="custom-container-out bg-[#FAFAFA] ">
        <div className="custom-container-in flex-col pb-0 pt-6 w-full">
          <div className="flex justify-between  container items-center my-6 mb-10">
            <Link
              to="/"
              className="font-[Montserrat] font-bold text-2xl text-t-3 tracking-wide min-w-[140px]"
            >
              Bandage
            </Link>
            <div className="flex gap-6 text-2xl text-t-1 ">
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faTwitter} />
            </div>
          </div>
          <div className="bg-[#E6E6E6] w-full h-[1px] my-[2px]"></div>
        </div>
      </div>
      <div className="custom-container-out bg-white ">
        <div className="custom-container-in flex-col w-full">
          <div className="flex justify-between gap-10 flex-wrap my-8">
            <div className="flex flex-col gap-2 tracking-wider">
              <h3 className="text-bold font-[Montserrat] font-bold text-lg text-t-3 mb-2">
                Company
              </h3>
              <p className="text-bold font-[Montserrat] font-bold text-sm text-t-2 ">
                About Us
              </p>
              <p className="text-bold font-[Montserrat] font-bold text-sm text-t-2 ">
                Carrier
              </p>
              <p className="text-bold font-[Montserrat] font-bold text-sm text-t-2 ">
                We are hiring
              </p>
              <p className="text-bold font-[Montserrat] font-bold text-sm text-t-2 ">
                Blog
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-bold font-[Montserrat] font-bold text-lg text-t-3 tracking-wide mb-2">
                Legal
              </h3>
              <p className="text-bold font-[Montserrat] font-bold text-sm text-t-2 tracking-wider">
                About Us
              </p>
              <p className="text-bold font-[Montserrat] font-bold text-sm text-t-2 tracking-wider">
                Carrier
              </p>
              <p className="text-bold font-[Montserrat] font-bold text-sm text-t-2 tracking-wider">
                We are hiring
              </p>
              <p className="text-bold font-[Montserrat] font-bold text-sm text-t-2 tracking-wider">
                Blog
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-bold font-[Montserrat] font-bold text-lg text-t-3 tracking-wide mb-2">
                Features
              </h3>
              <p className="text-bold font-[Montserrat] font-bold text-sm text-t-2 tracking-wider">
                About Us
              </p>
              <p className="text-bold font-[Montserrat] font-bold text-sm text-t-2 tracking-wider">
                Carrier
              </p>
              <p className="text-bold font-[Montserrat] font-bold text-sm text-t-2 tracking-wider">
                We are hiring
              </p>
              <p className="text-bold font-[Montserrat] font-bold text-sm text-t-2 tracking-wider">
                Blog
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-bold font-[Montserrat] font-bold text-lg text-t-3 tracking-wide mb-2">
                Resources
              </h3>
              <p className="text-bold font-[Montserrat] font-bold text-sm text-t-2 tracking-wider">
                About Us
              </p>
              <p className="text-bold font-[Montserrat] font-bold text-sm text-t-2 tracking-wider">
                Carrier
              </p>
              <p className="text-bold font-[Montserrat] font-bold text-sm text-t-2 tracking-wider">
                We are hiring
              </p>
              <p className="text-bold font-[Montserrat] font-bold text-sm text-t-2 tracking-wider">
                Blog
              </p>
            </div>
            <div className="flex flex-col gap-2 ">
              <h3 className="text-bold font-[Montserrat] font-bold text-lg text-t-3 tracking-wide mb-2">
                Get in Touch
              </h3>
              <div className="flex box-border bg-[#E6E6E6] border-[#E6E6E6] border-solid border-[1px] font-[Montserrat] font-medium text-sm text-t-2 tracking-wide rounded-lg">
                <input
                  placeholder="Your Email"
                  className="p-4 rounded-lg rounded-r-none bg-[#F9F9F9]"
                ></input>
                <button className="bg-t-1 p-4 text-white rounded-lg rounded-l-none">
                  Subscribe
                </button>
              </div>
              <p className="font-[Montserrat] font-medium text-xs text-t-2 tracking-wide">
                Lorem ipsum dolor sit amet
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="custom-container-out bg-[#FAFAFA] ">
        <div className="custom-container-in flex-col py-0 w-full">
          <div className="flex justify-between items-center my-6 text-t-2 font-bold text-sm tracking-wide">
            <p>Made With Love By Finland All Right Reserved </p>
          </div>
        </div>
      </div>
    </>
  )
}
