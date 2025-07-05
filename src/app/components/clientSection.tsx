import React from 'react'

const logos = [
    "/clients/client1.jpeg",
    "/clients/client2.png",
    "/clients/client3.png",
    "/clients/client4.png",
    "/clients/client5.jpeg",
    "/clients/client6.png",
    "/clients/client7.png",
    "/clients/client8.png",
    "/clients/client9.png",
    "/clients/client10.png",
  ];

  
const ClientSection = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap py-10 bg-white relative">
    <div className="inline-flex animate-marquee space-x-16">
      {logos.concat(logos).map((logo, i) => (
        <img
          key={i}
          src={logo}
          alt={`Client ${i}`}
          className="h-12 opacity-60 hover:opacity-100 transition-transform duration-300 hover:scale-105"
        />
      ))}
    </div>
  </div>
  )
}

export default ClientSection