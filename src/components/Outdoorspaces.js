import React from 'react';
import room from './assets/room.mp4';
import outdoor from './assets/sets/outdoor.jpg';
import outdoor1 from './assets/sets/outdoor1.jpg';
import outdoor2 from './assets/sets/outdoor2.jpg';
import outdoor3 from './assets/sets/set8.jpg';
import outdoor4 from './assets/sets/set11.jpg';
import outdoor5 from './assets/sets/set4.jpg';

const OutdoorProducts = [
  outdoor, outdoor1, outdoor2, outdoor3, outdoor4, outdoor5
];

const Outdoorspaces = () => {
  return (
    <div className="h-auto mb-20">
      <div className="relative h-[40vh] md:h-[60vh] lg:h-[60vh] mx-4 md:mx-10 lg:mx-[3%] my-4 lg:my-10">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={room}
          autoPlay
          loop
          muted
        ></video>
        <div className="relative z-10 flex items-center justify-center h-full bg-black bg-opacity-50">
          <div className="text-center text-white p-4 md:p-8">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">Outdoor Spaces</h1>
            <p className="text-xs md:text-lg lg:text-xl">
              Discover our many outdoor spaces and find your specific style, whether it be modern, rustic, or minimalist. <br />
              Pick a space designed to your wishes. Because the more it reflects you, the more extraordinary it is.
            </p>
          </div>
        </div>
      </div>
      <div className='my-8 md:my-10 border-b border-gray-500 pb-4 px-4 mx-2 md:px-6 lg:px-10'>
        <h1 className='font-bold text-2xl md:text-4xl lg:text-3xl'>Inspiring Outdoor Spaces</h1>
        <p className='text-xs md:text-lg lg:text-xl mt-2'>Get inspiration from outdoor spaces styled by our skilled interior designers.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 px-4 md:px-6 lg:px-10">
        {OutdoorProducts.map((image, index) => (
          <div key={index} className="border rounded-lg overflow-hidden">
            <img src={image} alt={`Outdoor Product ${index + 1}`} className="w-full h-[200px] md:h-[250px] lg:h-[300px] object-fit lg:object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Outdoorspaces;
