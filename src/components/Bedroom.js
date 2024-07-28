import React from 'react';
import room from './assets/room.mp4';
import almirah1 from './assets/almirah/almirah1.jpg';
import almirah2 from './assets/almirah/almirah2.jpg';
import almirah3 from './assets/almirah/almirah3.jpg';
import almirah4 from './assets/almirah/almirah4.jpg';
import almirah5 from './assets/almirah/almirah5.jpg';
import almirah6 from './assets/almirah/almirah6.jpg';

const almirahProducts = [
  almirah1, almirah2, almirah3, almirah4, almirah5, almirah6,
];

const Bedroom = () => {
  return (
    <div className="h-auto mb-20">
      <div className="relative h-[40vh] lg:h-[60vh] md:h-[60vh] mx-4 md:mx-6 lg:mx-[3%] lg:my-10 my-4">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={room}
          autoPlay
          loop
          muted
        ></video>
        <div className="relative z-10 flex items-center justify-center h-full bg-black bg-opacity-50">
          <div className="text-center text-white p-4 md:p-6 lg:p-8">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">Bed Room</h1>
            <p className="text-base md:text-lg lg:text-xl">
              Discover our many rooms and find your specific style, whether it be retro, Japandi, or minimalistic. <br />
              Pick a room designed to your wishes. Because the more it reflects you, the more extraordinary it is.
            </p>
          </div>
        </div>
      </div>
      <div className='my-8 md:my-10 border-b border-gray-500 pb-4 mx-2 px-4 md:px-6 lg:px-10'>
        <h1 className='font-bold text-2xl md:text-3xl lg:text-3xl'>Inspiring Bed Rooms</h1>
        <p className='text-bxs md:text-lg lg:text-xl mt-2'>Get inspiration from bedrooms styled by our skilled interior designers.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 px-4 md:px-6 lg:px-10">
        {almirahProducts.map((image, index) => (
          <div key={index} className="border rounded-lg overflow-hidden">
            <img src={image} alt={`Almirah Product ${index + 1}`} className="w-full h-[250px] md:h-[250px] lg:h-[300px] object-fit lg:object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Bedroom;
