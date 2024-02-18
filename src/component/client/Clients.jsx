import React from 'react'
import ClientsCard from './ClientsCard'

export default function Clients() {
  return (
    <div className="custom-container-out py-10 bg-white">
      <div className="custom-container-in gap-6 flex-wrap justify-center">
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
