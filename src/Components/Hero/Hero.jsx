

import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
function Hero() {
    const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    const movePicture = () => {
      setIsMoving(true);
      setTimeout(() => {
        setIsMoving(false);
      }, 1000); // Return to original position after 3 seconds
    };

    const interval = setInterval(movePicture, 3000); // Move picture every 6 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
        <div className='lg:flex lg:flex-row-reverse justify-evenly items-center' style={{ height: '100vh', backgroundImage: 'url(https://themewant.com/products/html/dinenos/assets/images/banner/shape/slider2-shape.webp)' }}>


<div className='flex justify-end pr-5 '>
  <img className='p-2 border-2 border-orange-700'
    src="https://i.ibb.co/GHHWzKy/slider2.webp"
    alt="Moving Image"
    style={{
      borderRadius: '50%',
      width: '500px',
      height: '500px',
      position: 'relative',
      top: isMoving ? '-50px' : '0',
      transition: 'top 1.0s ease-in-out',
      willChange: 'top',
    }}
  />
</div>
<div className='flex gap-10 flex-col pl-5 items-start justify-start'>
  <h1>We Serve Food, Harmony, & Laughter Since 1998 </h1>
  
  <h2 className='lg:text-5xl md:text-3xl sm:text-2xl'>Delicious Foods <br/> With <br/>
    Wonderful Eating</h2>
<div className='flex gap-6'>
  <button className='btn bg-orange-700'>View More</button>
  <button className='btn bg-orange-700'>Food Menu</button>
</div>
  
</div>
</div>
    </div>
  )
}

export default Hero