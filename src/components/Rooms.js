import React from 'react';
import room from './assets/room.mp4';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from 'react-router-dom';

const images = [
  { src: 'https://i.pinimg.com/564x/46/2c/63/462c6321d695b6c8cd13a9c42837dc1f.jpg', alt: "Dinning Room", label: "Dinning Room", path: "/dinningroom" },
  { src: 'https://i.pinimg.com/564x/06/3f/eb/063feb5e5d8b140ea6d300d56419c0c2.jpg', alt: "Bars & Hotels", label: "Bars & Hotels", path: '/home' },
  { src: 'https://i.pinimg.com/564x/8f/cb/f0/8fcbf02074896f185a2574b4eaa0445e.jpg', alt: "Living Room", label: "Living Room", path: '/livingroom' },
  { src: 'https://i.pinimg.com/236x/0d/c3/c7/0dc3c7f732e19200bbb1c6b46e697e1d.jpg', alt: "Bed Rooms", label: "Bed Rooms", path: '/bedroom' },
  { src: 'https://i.pinimg.com/564x/c2/30/af/c230af29b63c9ea6bfc32b1c3188cb5a.jpg', alt: "Small Spaces", label: "Small Spaces", path: '/smallspaces' },
  { src: 'https://i.pinimg.com/564x/ce/aa/a6/ceaaa65d425a1dbcb8897c01a331ba13.jpg', alt: "Outdoor Spaces", label: "Outdoor Spaces", path: '/Outdoorspaces' },
];

const Rooms = () => {
  return (
    <>
      <div className="relative h-[40vh] md:h-[60vh] mx-[3%] my-4 lg:my-[7%]">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={room}
          autoPlay
          loop
          muted
        ></video>
        <div className="relative z-10 flex items-center justify-center h-full bg-black bg-opacity-50">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-6xl font-bold mb-4">Rooms</h1>
            <p className="text-xs md:text-lg font-semibold">
              Discover our many rooms and find your specific style if it be retro, japandi or minimalistic. <br /> Pick a room designed to your wishes. Because the more you it is. The more extraordinary it is.
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto p-4 text-[#1d1d1b]">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#1d1d1b]">Explore the look</h1>
        <div className='w-[90%] md:w-[60%] h-[60vh] md:h-[70vh] max-sm:h-[45vh] max-sm:w-[90%] mx-auto'>
          <Swiper
            spaceBetween={6}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 16 },
              768: { slidesPerView: 3, spaceBetween: 16 },
            }}
            pagination={false}  // Remove Swiper dots
            modules={[Pagination]}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center">
                  <Link to={image.path}>
                    <img src={image.src} alt={image.alt} className='w-full h-[40vh] md:h-[50vh] object-cover' />
                  </Link>
                  <h2 className="text-lg md:text-2xl font-semibold mt-2">{image.label}</h2>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className='flex flex-col md:flex-row items-center gap-8 md:gap-12 mx-auto md:mx-[20%] max-sm:mb-[14%] mb-[12%] px-4'>
        <div className='w-full md:w-[70vh] p-4'>
          <h1 className='text-2xl md:text-3xl font-bold'>Did You Know ?</h1>
          <p className='mt-2 text-sm md:text-base'>
            Iron furniture manufacturing is a meticulous and skilled process that combines traditional craftsmanship with modern techniques. It begins with the selection of high-quality raw iron, which is then heated and shaped into various forms using specialized tools and machinery. The shaping process often involves techniques such as forging, welding, and casting to create sturdy and intricate designs. Skilled artisans meticulously work on each piece, ensuring that the joints are seamless and the structures are robust. Once the basic framework is constructed, the furniture undergoes finishing processes such as sanding, polishing, and coating to enhance its durability and aesthetic appeal.
          </p>
          <Link to='/about' className='py-1 w-32 md:w-40 px-2 md:px-4 border border-zinc-900 rounded-3xl flex items-center gap-2 font-normal mt-4 max-sm:w-40 max-sm:gap-6 max-sm:pl-4'>Know More<IoIosArrowRoundForward className='font-bold text-2xl md:text-3xl mt-1' /></Link>
        </div>
        <div className='w-full md:w-auto p-4'>
          <img src='https://i.pinimg.com/564x/a0/04/ab/a004ab33d4a78dcec85c474dea141d97.jpg' alt='know image' className='w-full md:w-auto' />
        </div>
      </div>
    </>
  );
};

export default Rooms;
