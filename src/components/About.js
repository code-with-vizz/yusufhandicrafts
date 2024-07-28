
import React from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from 'react-router-dom';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import about from './assets/about/about.jpg';
import about2 from './assets/about/about2.jpg';
import about3 from './assets/about/about3.jpg';

const description = [
  {
    src: about,
    alt: 'Modern Minimalist Chair',
    title: 'Modern Minimalist Chair',
    description: 'Discover the epitome of modern design with our Minimalist Chair. Featuring sleek lines and a striking silhouette, this chair is a perfect blend of form and function. The vibrant green upholstery adds a pop of color, while the sturdy metal frame ensures durability. Ideal for contemporary living spaces, this chair offers both style and comfort.'
  },
  {
    src: about3,
    alt: 'Dual-Surface Coffee Table',
    title: 'Dual-Surface Coffee Table',
    description: 'Elevate your living space with our Dual-Surface Coffee Table, a perfect fusion of elegance and functionality. Featuring a unique design with a combination of marble and wood surfaces, this table offers a versatile aesthetic that complements any decor. The sleek metal frame provides a modern touch, making it an ideal centerpiece for contemporary homes.'
  },
  {
    src: about2,
    alt: 'Geometric Glass Top Table',
    title: 'Geometric Glass Top Table',
    description: 'Introduce a touch of modern sophistication to your home with our Geometric Glass Top Table. The intricate wooden base showcases a stunning geometric design, supporting a sleek glass top. This table is a perfect blend of art and functionality, providing a striking focal point for any room. Ideal for those who appreciate contemporary design and high-quality craftsmanship.'
  },
  // Add other images here with their respective titles and descriptions
];

const images = [
  { src: 'https://i.pinimg.com/236x/25/2b/b3/252bb3ac2b14b1511710796ba08a9e36.jpg', alt: "Home offices" },
  { src: 'https://i.pinimg.com/474x/1d/f6/d4/1df6d4c4d66050a7d5db4505010d4fd1.jpg', alt: "Home offices" },
  { src: 'https://i.pinimg.com/236x/95/06/56/9506569c0ecedbc789d70f837505a9b3.jpg', alt: "Home offices" },
  { src: 'https://i.pinimg.com/564x/ae/a5/5f/aea55ff5efcc86d6e35f26995519852c.jpg', alt: "Home offices" },
  { src: 'https://i.pinimg.com/736x/86/41/60/86416023d43846233306151a0c43bc42.jpg', alt: "Home offices" },
  { src: 'https://i.pinimg.com/474x/b2/83/91/b28391de856ed0a341df43d43b64daf1.jpg', alt: "Home offices" },
];

function About() {
  return (
    <div className='mb-40 lg:mb-20'>
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center gap-12 mt-10  mx-4 lg:mx-6 ">
        <div className="text-center md:text-left md:w-1/2">
          <span className='text-[#FCEFD5] bg-[#194B52] py-1 px-2 text-[0.50rem] rounded-full'>YUSUF HANDICRAFTS</span>
          <h1 className='text-4xl md:text-7xl font-bold mt-4 mb-6'>HANDICRAFTED <br /> FURNITURE FOR <br /> EVERY CORNER</h1>
        </div>
        <div className='w-[100%] lg:w-[50%] md:w-[50%] lg:h-[70vh] h-[50vh] lg:mr-[10]  '>
        <Swiper
         spaceBetween={6}
         slidesPerView={1}
         breakpoints={{
           640: { slidesPerView: 2, spaceBetween: 16},
          768: { slidesPerView: 3 ,spaceBetween: 16},
        }}
      >
         {images.map((image, index) => (
          <div className=' '>
            <SwiperSlide key={index}>
            <div className="flex flex-col  ">
               <img src={image.src} alt={image.alt} className='w-full h-[50vh] object-cover' />
                            </div>
        
                    </SwiperSlide>

          </div>
         
       ))}
     </Swiper>
     </div>

      </div>

      {/* About Us Section */}
      <div className='flex flex-col md:flex-row items-start gap-12 mx-4 mt-12 lg:mt-2'>
        <div className='md:w-1/2 w-full lg:w-full lg:mx-[10%] lg:mt-[2%]'>
          <h1 className='text-3xl md:text-4xl font-bold'>About Us</h1>
          <p className='mt-4 text-base md:text-lg'>
            Welcome to Yusuf Handicrafts, where tradition meets innovation. With over 25 years of excellence in manufacturing, we have established ourselves as a leading name in the industry, known for our commitment to quality and craftsmanship.
            <br /><br />
            Our journey began with a vision to bring the rich heritage of handcrafted products to the world. Over the years, we have honed our skills and expanded our expertise, working with a large number of prestigious companies globally. This experience has enabled us to perfect our processes and deliver products that are not only beautiful but also of the highest quality.
            <br /><br />
            At Yusuf Handicrafts, we believe in the power of craftsmanship. Each piece we create is a testament to the dedication and skill of our artisans, who pour their heart and soul into every detail. Our diverse range of products showcases the rich cultural heritage of our craft, blending traditional techniques with contemporary designs to meet the evolving tastes of our global clientele.
            <br /><br />
            We take pride in our ability to cater to the unique needs of our customers, offering customized solutions that reflect their vision and style. Our commitment to excellence extends beyond our products to our customer service, ensuring a seamless experience from the moment you reach out to us.
            <br /><br />
            Join us on this journey of creativity and tradition. Discover the world of Yusuf Handicrafts and experience the art of true craftsmanship.
          </p>
          <Link to='/rooms' className='py-2 border border-zinc-900 rounded-3xl flex items-center justify-center  font-normal mt-6 w-40 md:w-[8vw]'>Services </Link>
        </div>
      </div>

      {/* Description Swiper Section */}
      <div className="flex items-center justify-center mt-12 px-4">
        <div className='w-full md:w-[80vw] lg:w-[70vw] h-[60vh]'>
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 0 },
              768: { slidesPerView: 1, spaceBetween: 0 },
            }}
          >
            {description.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col md:flex-row lg:gap-12 items-center bg-white shadow-md border border-gray-100 rounded-md w-full h-full">
                  <img src={item.src} alt={item.alt} className='w-full md:w-[300px] h-[40vh] md:h-[360px] lg:h-[300px] lg:m-4 lg:object-cover object-cover rounded-md' />
                  <div className="p-4 md:w-[50%]">
                    <h3 className="text-lg font-semibold mb-4">{item.title}</h3>
                    <p className="text-gray-700 text-xs lg:text-base">{item.description}</p>
                    <Link to='/products' className='py-2 px-4 border border-zinc-900 rounded-3xl flex items-center gap-2 font-normal mt-6 w-40 '>Explore More <IoIosArrowRoundForward className='font-bold text-2xl' /></Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default About;
