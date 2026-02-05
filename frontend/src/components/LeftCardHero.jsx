import React from 'react'

const LeftCardHero = ({url}) => {
  return (
    <>
      {/* --- Left Side: Hero Image --- */}
        <div 
          className="w-full md:w-1/2 bg-cover bg-center relative rounded-l-3xl"
          // Using a placeholder image from Unsplash that matches the greenhouse aesthetic
          style={{ 
            backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1661811820259-2575b82101bf?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
          }}
        >
           {/* Subtle overlay to ensure connection with brand colors if needed */}
          <div className="absolute inset-0 rounded-l-3xl bg-green-900/20 mix-blend-multiply"></div>
        </div></>
  )
}

export default LeftCardHero