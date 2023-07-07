
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const Home = () => {
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
    <>

      <div className='lg:flex lg:flex-row-reverse justify-evenly items-center' style={{ height: '100vh', backgroundImage: 'url(https://themewant.com/products/html/dinenos/assets/images/banner/shape/slider2-shape.webp)' }}>


        <div className='flex justify-end pr-5 '>
          <img className='p-2 border-2 border-orange-700'
            src="https://themewant.com/products/html/dinenos/assets/images/banner/slider2.webp"
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
          <div>
          <svg className='text-orange-700  h-7 w-7' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"/></svg>
          </div>
          <h2 className='lg:text-5xl md:text-3xl sm:text-2xl'>Delicious Foods <br/> With <br/>
            Wonderful Eating</h2>
        <div className='flex gap-6'>
          <button className='btn bg-orange-700'>View More</button>
          <button className='btn bg-orange-700'>Food Menu</button>
        </div>
          
        </div>
      </div>

    </>
  );
};

export default Home;