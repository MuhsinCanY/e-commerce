import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import ContactContentCard from './ContactContentCard'

export default function ContactContent() {
  return (
    <div className="bg-white font-[Montserrat] font-bold text-t-3 py-10">
      <div className="container flex flex-col gap-16">
        <div className="flex flex-col gap-4 justify-center items-center">
          <p className="text-[14px] leading-[24px] tracking-wider">
            VISIT OUR OFFICE
          </p>
          <p className="text-[40px] leading-[50px] tracking-wider text-center max-w-[590px]">
            We help small businesses with big ideas
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-0">
          <ContactContentCard icon={faPhone} bg="bg-white" text="text-t-3" />
          <ContactContentCard icon={faPhone} bg="bg-t-3" text="text-white" />
          <ContactContentCard icon={faPhone} bg="bg-white" text="text-t-3" />
        </div>
      </div>
    </div>
  )
}
