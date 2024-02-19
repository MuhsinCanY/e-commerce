import React from 'react'
import Clients from '../client/Clients'
import ClientsCard from '../client/ClientsCard'

export default function AboutClients() {
  return (
    <div className="bg-[#FAFAFA] font-[Montserrat] font-bold py-10">
      <div className=" container flex flex-col items-center">
        <div className="flex flex-col gap-2 p-4 mb-[70px] items-center">
          <h2 className="text-center font-bold text-[40px] leading-[50px] tracking-wider text-t-3">
            Big Companies Are Here
          </h2>
          <p className="text-center text-[14px] max-w-[460px] font-normal tracking-wide text-t-2">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className="">
          <div className="container flex-col md:flex-row flex gap-14 justify-between">
            <ClientsCard imageSource="/assets/clients/client0.png" />
            <ClientsCard imageSource="/assets/clients/client1.png" />
            <ClientsCard
              imageSource="/assets/clients/client2.png"
              position="object-top"
            />
            <ClientsCard imageSource="/assets/clients/client3.png" />
            <ClientsCard imageSource="/assets/clients/client4.png" />
            <ClientsCard imageSource="/assets/clients/client5.png" />
          </div>
        </div>
      </div>
    </div>
  )
}
