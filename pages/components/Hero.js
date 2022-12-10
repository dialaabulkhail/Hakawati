import React from 'react'

const Hero = () => {
  return (
    <div>
        <div className="relative">
        <div className="bg-hero-section bg-no-repeat h-screen bg-center bg-cover">
          <video autoPlay loop muted className="absolute inset-0 object-cover h-screen xl:h-auto">
            <source
              src="/video/robovice-banner.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0">
            {/* <Navbar /> */}
            <div className="sm:text-5xl text-4xl font-thin sm:my-56 my-32 mx-16 text-center text-white">
           <span className=' text-7xl'>منصة حكواتي
</span>  
               </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Hero