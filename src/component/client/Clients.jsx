import React from 'react'
import ClientsCard from './ClientsCard'

export default function Clients({ bg = 'bg-white' }) {
  return (
    <div className={`${bg} py-10`}>
      <div
        className="container p-0 flex gap-3 flex-wrap justify-between 
      "
      >
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
  )
}
