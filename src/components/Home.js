
import React from 'react';
import room from './assets/room.mp4';
import bar1 from './assets/bar/bar1.jpg';
import bar2 from './assets/bar/bar2.jpg';
import bar3 from './assets/bar/bar3.jpg';
import bar4 from './assets/bar/bar4.jpg';

import bar6 from './assets/bar/bar6.jpg';
import bar7 from './assets/bar/bar7.jpg';
import bar8 from './assets/bar/bar8.jpg';

import bar10 from './assets/bar/bar10.jpg';

const barProducts = [
  bar1, bar2, bar3, bar4,  bar6, bar7, bar8, bar10,
];

const Home = () => {
  return (
    <div className="h-auto">
      <div className="relative h-[40vh] lg:h-[60vh] md:h-[60vh] mx-4 md:mx-10 lg:mx-[3%] lg:my-10 my-4">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={room}
          autoPlay
          loop
          muted
        ></video>
        <div className="relative z-10 flex items-center justify-center h-full bg-black bg-opacity-50">
          <div className="text-center text-white p-4 md:p-8">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">Bar</h1>
            <p className="text-xs md:text-lg lg:text-xl">
              Discover our many bar designs and find your specific style, whether it's modern, classic, or rustic. <br />
              Pick a bar designed to your wishes. The more it reflects you, the more extraordinary it is.
            </p>
          </div>
        </div>
      </div>
      <div className='my-8 md:my-10 border-b border-gray-500 pb-4 px-4 mx-2 md:px-6 lg:px-10'>
        <h1 className='font-bold text-2xl md:text-4xl lg:text-3xl'>Inspiring Bars</h1>
        <p className='text-xs md:text-lg lg:text-xl mt-2'>Get inspiration from bars styled by our skilled interior designers.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 px-4 md:px-6 lg:px-10">
        {barProducts.map((image, index) => (
          <div key={index} className="border rounded-lg overflow-hidden">
            <img src={image} alt={`Bar Product ${index + 1}`} className="w-full h-[250px] md:h-[250px] lg:h-[300px] object-fit lg:object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
