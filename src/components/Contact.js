// import React from "react";
// import { motion } from "framer-motion";
// import dotted from './assets/shape-dotted-light.svg';

// const Contact = () => {
//   const onSubmit = async (event) => {
//     event.preventDefault();
//     const formData = new FormData(event.target);

//     formData.append("access_key", "54363723-f859-499f-a3c4-8e6d23875c86");

//     const object = Object.fromEntries(formData);
//     const json = JSON.stringify(object);

//     try {
//       const res = await fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json"
//         },
//         body: json
//       });

//       const result = await res.json();

//       if (result.success) {
//         console.log("Success", result);
//         alert("Message sent successfully!");
//         event.target.reset(); // Reset the form after successful submission
//       } else {
//         console.error("Error", result);
//         alert("Failed to send message. Please try again later.");
//       }
//     } catch (error) {
//       console.error("Fetch error:", error);
//       alert("Failed to send message. Please check your network connection.");
//     }
//   };

//   return (
//     <section id="support" className="px-4 md:px-8 2xl:px-0  my-[4%] mb-[6%]">
//       <div className="relative mx-auto max-w-6xl px-7.5 pt-10 lg:px-15 lg:pt-4 xl:px-20 xl:pt-10">
//         <div className="absolute left-0 top-0 h-2/3 w-full rounded-lg bg-gradient-to-t from-transparent to-[white] z-10"></div>
//         <div className="absolute bottom-[-255px] left-0 h-full w-full">
//           <img src={dotted} alt="Dotted" className="" />
//         </div>

//         <div className="z-[30] flex flex-col-reverse flex-wrap gap-8 md:flex-row md:flex-nowrap md:justify-between xl:gap-20 ">
//           <motion.div
//             variants={{
//               hidden: { opacity: 0, y: -20 },
//               visible: { opacity: 1, y: 0 },
//             }}
//             initial="hidden"
//             whileInView="visible"
//             transition={{ duration: 1, delay: 0.1 }}
//             viewport={{ once: true }}
//             className="w-[90%] rounded-lg bg-white p-8 shadow-lg md:w-3/5 lg:w-3/4 xl:p-10 z-20"
//           >
//             <h2 className="mb-15 text-3xl font-semibold text-black xl:text-4xl">
//                 Send a message
//               </h2>
//             <form onSubmit={onSubmit} className="max-w-full mx-auto p-8 mt-0  ">
              

//               <div className="input-box mb-4">
//                 <label className="block text-sm font-medium text-gray-700">
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   className="field mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                   placeholder="Enter Your Name"
//                   name="name"
//                   required
//                 />
//               </div>
//               <div className="input-box mb-4">
//                 <label className="block text-sm font-medium text-gray-700">
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   className="field mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                   placeholder="Enter Your email"
//                   name="email"
//                   required
//                 />
//               </div>
//               <div className="input-box mb-4">
//                 <label className="block text-sm font-medium text-gray-700 ">
//                   Your Message
//                 </label>
//                 <textarea
//                   className="field mess mt-1 block w-full px-6 h-[20vh] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                   placeholder="Enter Your message"
//                   name="message"
//                   required
//                 ></textarea>
//               </div>
//               <button
//                 type="submit"
//                 className="w-[10vw] py-2 px-2 border border-transparent text-white rounded-full shadow-sm text-sm font-medium  bg-black "
//               >
//                 Send Message
//               </button>
//             </form>
//           </motion.div>

//           <motion.div
//             variants={{
//               hidden: { opacity: 0, y: -20 },
//               visible: { opacity: 1, y: 0 },
//             }}
//             initial="hidden"
//             whileInView="visible"
//             transition={{ duration: 2, delay: 0.1 }}
//             viewport={{ once: true }}
//             className="w-full md:w-2/5 md:p-7.5 lg:w-1/4 ml-20 z-[30]"
//           >
//             <h2 className="mb-14 text-3xl font-semibold text-black xl:text-4xl">
//               Find us
//             </h2>

//             <div className="mb-7">
//               <h3 className="mb-4 text-lg font-medium text-black">
//                 Our Location
//               </h3>
//               <p>Rai Ka Bagh Old Police Line MIA Phase 2 , Basni H-676</p>
//             </div>
//             <div className="mb-7">
//               <h3 className="mb-4 text-lg font-medium text-black">
//                 Email Address
//               </h3>
//               <p>
//                 <a href="mailto:dr.ruks768@gmail.com">dr.ruks768@gmail.com</a>
//               </p>
//             </div>
//             <div>
//               <h4 className="mb-4 text-lg font-medium text-black">
//                 Phone Number
//               </h4>
//               <p>
//                 <a href="tel:+917028828831">+91 9460768988</a>
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import React from "react";
import { motion } from "framer-motion";
import dotted from './assets/shape-dotted-light.svg';

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "54363723-f859-499f-a3c4-8e6d23875c86");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });

      const result = await res.json();

      if (result.success) {
        console.log("Success", result);
        alert("Message sent successfully!");
        event.target.reset(); // Reset the form after successful submission
      } else {
        console.error("Error", result);
        alert("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      alert("Failed to send message. Please check your network connection.");
    }
  };

  return (
    <section id="support" className="px-0 lg:px-4 md:px-8 2xl:px-0 my-2 mb-16 lg:my-8">
      <div className="relative mx-0 lg:mx-auto max-w-6xl px-4 md:px-8 lg:px-12 xl:px-20 pt-10">
        <div className="absolute left-0 top-0 h-2/3 w-full rounded-lg bg-gradient-to-t from-transparent to-[white] z-10"></div>
        <div className="absolute bottom-[-255px] left-0 h-full w-full">
          <img src={dotted} alt="Dotted" className="w-full h-full object-cover" />
        </div>

        <div className="z-[30] flex flex-col-reverse gap-8 md:flex-row md:gap-8 md:justify-between xl:gap-20">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="w-[270px] md:w-3/5 lg:w-3/4 bg-white p-6 md:p-8 xl:p-10 rounded-lg shadow-lg z-20"
          >
            <h2 className="mb-6 text-2xl md:text-3xl font-semibold text-black">
              Send a message
            </h2>
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="input-box">
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter Your Name"
                  name="name"
                  required
                />
              </div>
              <div className="input-box">
                <label className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter Your email"
                  name="email"
                  required
                />
              </div>
              <div className="input-box">
                <label className="block text-sm font-medium text-gray-700">
                  Your Message
                </label>
                <textarea
                  className="mt-1 block w-full px-3 py-2 h-32 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter Your message"
                  name="message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 border border-transparent text-white rounded-md shadow-sm text-sm font-medium bg-black hover:bg-gray-700"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 2, delay: 0.1 }}
            viewport={{ once: true }}
            className="w-full md:w-2/5 lg:w-1/4 md:pl-8 z-30"
          >
            <h2 className="mb-6 text-2xl md:text-3xl font-semibold text-black">
              Find us
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-black mb-2">
                  Our Location
                </h3>
                <p>Rai Ka Bagh Old Police Line MIA Phase 2, Basni H-676</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-black mb-2">
                  Email Address
                </h3>
                <p>
                  <a href="mailto:dr.ruks768@gmail.com">dr.ruks768@gmail.com</a>
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-black mb-2">
                  Phone Number
                </h3>
                <p>
                  <a href="tel:+917028828831">+91 9460768988</a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
