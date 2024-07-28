import React from 'react';
import room from './assets/room.mp4';
import stand1 from './assets/almirah/stand1.jpg';
import stand2 from './assets/almirah/stand2.jpg';
import stand3 from './assets/almirah/stand3.jpg';
import stand4 from './assets/almirah/stand4.jpg';
import stand5 from './assets/almirah/stand5.jpg';
import stand6 from './assets/almirah/stand6.jpg';
import stand7 from './assets/almirah/stand7.jpg';
import stand8 from './assets/almirah/stand8.jpg';
import stand9 from './assets/almirah/stand9.jpg';
import stand10 from './assets/almirah/stand10.jpg';

const smallSpaceProducts = [
  stand1, stand2, stand3, stand4, stand5, stand6, stand7,
  stand8, stand9, stand10
];

const SmallSpaces = () => {
  return (
    <div className="h-auto mb-20">
      <div className="relative h-[40vh] md:h-[60vh] lg:h-[60vh] mx-4 md:mx-6 lg:mx-[3%] lg:my-10 my-4">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={room}
          autoPlay
          loop
          muted
        ></video>
        <div className="relative z-10 flex items-center justify-center h-full bg-black bg-opacity-50">
          <div className="text-center text-white p-4 md:p-6 lg:p-8">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">Small Spaces</h1>
            <p className="text-xs md:text-lg lg:text-xl">
              Discover our many small spaces and find your specific style, whether it be retro, Japandi, or minimalistic. <br />
              Pick a space designed to your wishes. Because the more it reflects you, the more extraordinary it is.
            </p>
          </div>
        </div>
      </div>
      <div className='my-8 md:my-10 border-b border-gray-500 pb-4 px-4 md:px-6 lg:px-10'>
        <h1 className='font-bold text-2xl md:text-3xl lg:text-3xl'>Inspiring Small Spaces</h1>
        <p className='text-xs md:text-lg lg:text-xl mt-2'>Get inspiration from small spaces styled by our skilled interior designers.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 px-4 md:px-6 lg:px-10">
        {smallSpaceProducts.map((image, index) => (
          <div key={index} className="border rounded-lg overflow-hidden">
            <img src={image} alt={`Small Space Product ${index + 1}`} className="w-full h-[250px] md:h-[250px] lg:h-[300px] object-fit lg:object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SmallSpaces;
