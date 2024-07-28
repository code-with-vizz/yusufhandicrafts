// import React, { useState } from 'react';
// import PropTypes from 'prop-types';


// const Productcard = ({ products = [], industries = [], categories = [] }) => {
//   const [industryFilters, setIndustryFilters] = useState([]);
//   const [categoryFilters, setCategoryFilters] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const productsPerPage = 9;

//   const handleIndustryChange = (e) => {
//     const value = e.target.value;
//     setIndustryFilters((prev) =>
//       prev.includes(value) ? prev.filter((filter) => filter !== value) : [...prev, value]
//     );
//   };

//   const handleCategoryChange = (e) => {
//     const value = e.target.value;
//     setCategoryFilters((prev) =>
//       prev.includes(value) ? prev.filter((filter) => filter !== value) : [...prev, value]
//     );
//   };

//   const filteredProducts = products.filter(product => {
//     return (
//       (industryFilters.length === 0 || industryFilters.includes(product.industry)) &&
//       (categoryFilters.length === 0 || categoryFilters.includes(product.category))
//     );
//   });

//   const indexOfLastProduct = currentPage * productsPerPage;
//   const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//   const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

//   const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <div className='flex gap-10 mb-20'>
//       <div className='mt-20 ml-10 w-[13vw]'>
//         <div className="mb-4">
//           <h2 className="text-lg font-semibold mb-2">Industry</h2>
//           {industries.map((industry) => (
//             <div key={industry} className="mb-2">
//               <label className="flex items-center">
//                 <input
//                   type="checkbox"
//                   value={industry}
//                   checked={industryFilters.includes(industry)}
//                   onChange={handleIndustryChange}
//                   className="form-checkbox"
//                 />
//                 <span className="ml-2">{industry}</span>
//               </label>
//             </div>
//           ))}
//         </div>
//         <div className="mb-4">
//           <h2 className="text-lg font-semibold mb-2">Category</h2>
//           {categories.map((category) => (
//             <div key={category} className="mb-2">
//               <label className="flex items-center">
//                 <input
//                   type="checkbox"
//                   value={category}
//                   checked={categoryFilters.includes(category)}
//                   onChange={handleCategoryChange}
//                   className="form-checkbox"
//                 />
//                 <span className="ml-2">{category}</span>
//               </label>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="container mx-auto px-4 my-16">
//   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//     {currentProducts.map(product => (
//            <div key={product.id} className="border w-[370px] h-[370px] pb-4 overflow-hidden">
//            <img src={product.image} alt={product.name} className="w-full h-[370px] object-cover" />
//          </div>
//     ))}
//   </div>
  
//   <div className="flex justify-center mt-10">
//     {Array.from({ length: totalPages }, (_, index) => (
//       <button
//         key={index + 1}
//         onClick={() => handlePageChange(index + 1)}
//         className={`px-4 py-2 mx-1 rounded-md transition-colors ${
//           currentPage === index + 1
//             ? 'bg-blue-500 text-white'
//             : 'bg-gray-200 hover:bg-gray-300'
//         }`}
//       >
//         {index + 1}
//       </button>
//     ))}
//   </div>
// </div>
//     </div>
//   );
// };

// Productcard.propTypes = {
//   products: PropTypes.array.isRequired,
//   industries: PropTypes.array.isRequired,
//   categories: PropTypes.array.isRequired,
// };

// export default Productcard;


import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaFilter } from 'react-icons/fa';

const Productcard = ({ products = [], industries = [], categories = [] }) => {
  const [industryFilters, setIndustryFilters] = useState([]);
  const [categoryFilters, setCategoryFilters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const productsPerPage = 9;

  const handleIndustryChange = (e) => {
    const value = e.target.value;
    setIndustryFilters((prev) =>
      prev.includes(value) ? prev.filter((filter) => filter !== value) : [...prev, value]
    );
  };

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setCategoryFilters((prev) =>
      prev.includes(value) ? prev.filter((filter) => filter !== value) : [...prev, value]
    );
  };

  const filteredProducts = products.filter(product => {
    return (
      (industryFilters.length === 0 || industryFilters.includes(product.industry)) &&
      (categoryFilters.length === 0 || categoryFilters.includes(product.category))
    );
  });

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex flex-col md:flex-row mb-20">
      {/* Mobile Filter Button */}
      <button 
        className="md:hidden py-2 px-2 bg-transparent border border-gray-300  text-black w-[30vw] justify-center rounded-md mb-4 mt-4 mx-4 flex items-center gap-4"
        onClick={() => setShowFilters(!showFilters)}
      >
        <FaFilter />
        Filter
       
      </button>

      {/* Filter Section */}
      <div className={`mt-20 ml-10 w-full md:w-[13vw] ${showFilters ? 'block' : 'hidden md:block'}`}>
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Industry</h2>
          {industries.map((industry) => (
            <div key={industry} className="mb-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  value={industry}
                  checked={industryFilters.includes(industry)}
                  onChange={handleIndustryChange}
                  className="form-checkbox"
                />
                <span className="ml-2">{industry}</span>
              </label>
            </div>
          ))}
        </div>
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Category</h2>
          {categories.map((category) => (
            <div key={category} className="mb-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  value={category}
                  checked={categoryFilters.includes(category)}
                  onChange={handleCategoryChange}
                  className="form-checkbox"
                />
                <span className="ml-2">{category}</span>
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 my-6 lg:my-16 flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProducts.map(product => (
            <div key={product.id} className="border w-full h-[350px] lg:h-[370px] pb-4 overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-full object-fit lg:object-cover" />
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center flex-wrap gap-2 mt-10">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`px-4 py-2 text-sm rounded-md transition-colors ${
                currentPage === index + 1
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

Productcard.propTypes = {
  products: PropTypes.array.isRequired,
  industries: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
};

export default Productcard;
