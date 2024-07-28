
import React from 'react';
import room from './assets/room.mp4';
import diningtable1 from './assets/dinningtable/dinningtable1.jpg';
import diningtable2 from './assets/dinningtable/dinningtable2.jpg';
import diningtable3 from './assets/dinningtable/dinningtable3.jpg';
import diningtable4 from './assets/dinningtable/dinningtable4.jpg';
import diningtable5 from './assets/dinningtable/dinningtable5.jpg';
import diningtable6 from './assets/dinningtable/dinningtable6.jpg';
import diningtable7 from './assets/dinningtable/dinningtable7.jpg';
import diningtable8 from './assets/dinningtable/dinningtable8.jpg';
import diningtable9 from './assets/dinningtable/dinningtable9.jpg';
import diningtable10 from './assets/dinningtable/dinningtable10.jpg';

const diningProducts = [
  diningtable1, diningtable2, diningtable3, diningtable4, diningtable5, diningtable6, diningtable7,
  diningtable8, diningtable9, diningtable10
];

const DiningRoom = () => {
  return (
    <div className="h-auto mb-20">
      <div className='relative h-[40vh] md:h-[60vh] lg:h-[60vh] mx-4 md:mx-10 lg:mx-[3%] lg:my-10 my-4'>
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={room}
          autoPlay
          loop
          muted
        ></video>
        <div className="relative z-10 flex items-center justify-center h-full bg-black bg-opacity-50">
          <div className="text-center text-white p-4 md:p-8">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">Dining Room</h1>
            <p className="text-xs md:text-lg lg:text-xl">
              Discover our many dining rooms and find your specific style, whether it be retro, Japandi, or minimalistic. <br />
              Pick a room designed to your wishes. Because the more you it is, the more extraordinary it is.
            </p>
          </div>
        </div>
      </div>
      <div className='my-8 md:my-10 border-b border-gray-500 pb-4 px-4 mx-2 md:px-6 lg:px-10'>
        <h1 className='font-bold text-2xl md:text-4xl lg:text-3xl'>Inspiring Dining Rooms</h1>
        <p className='text-base md:text-lg mt-2 text-xs lg:text-lg'>Get inspiration from dining rooms styled by our skilled interior designers.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 px-4 md:px-6 lg:px-10">
        {diningProducts.map((image, index) => (
          <div key={index} className="border rounded-lg overflow-hidden">
            <img src={image} alt={`Dining Product ${index + 1}`} className="w-full h-[250px] md:h-[250px] lg:h-[300px] object-fit lg:object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default DiningRoom;
