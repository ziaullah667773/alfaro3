// import Image from "next/image";
// import React from "react";
// import { FaQuoteRight } from "react-icons/fa";

// const Testimonial = () => {
//   return (
//     <div>
//         <h2 className="font-medium text-2xl pb-2 mx-24 pt-20">Testimonals</h2>
//       <div className="container mx-auto  pt-16 pb-16 grid grid-cols-2">
//         <div className="grid lg:grid-cols-[300px,1fr] gap-4">
//           <div className="border border-gray-300 rounded-2xl grid place-items-center p-6 lg:p-0">
//             <div className="text-center flex flex-col items-center gap-1 pt-2 pb-2">
//               <Image
//                 className="rounded-full inline-block h-[70px] w-[70px]"
//                 src="/images/user1.JPG"
//                 alt="dp"
//                 width={80}
//                 height={80}
//               />
//               <h2 className="text-gray-500 font-black text-[20px]">Zia</h2>
//               <p>Ecommerce</p>
//               <FaQuoteRight className="inline-block p-2 w-[30px] h-[30px] text-[#ff9fac]" />
//               <p className="max-w-[200px] text-gray-500">
//                 Lorem ipsum dolor sit, amet consectetur adipisicing elit.
//                 Voluptas quasi, cupiditate delectus, quis, hic et repudiandae
//                 eveniet sed odit pariatur repellat!
//               </p>
//             </div>
//           </div>
//           <div className="bg-red-600 rounded-2xl grid place-items-center p-4 ">
//             <div className="bg-[#ffffffab] min-w-[270px] sm:min-w-[300px] md:min-w-[500px] rounded-xl py-8 sm:px-8 px-2 grid place-items-center gap-3">
//                 <button className="bg-black text-white p-2 rounded-md ">
//                     25% DISCOUNT
//                 </button>
//                 <h2 className="font-extrabold text-2xl text-[#272727]">
//                     Summer Collection
//                 </h2>
//                 <p className="text-gray-500 text-[20px]">
//                     Starting @ RM20 <b>Shop Now</b>
//                 </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Testimonial;
import Image from "next/image";
import React from "react";
import { FaQuoteRight } from "react-icons/fa";

const Testimonial = () => {
  return (
    <div>
      <h2 className="font-medium text-2xl  mx-24 pt-20">Testimonials</h2>
      <div
        className="container mx-auto  pt-16 pb-16 grid lg:grid-cols-[300px,1fr] gap-4"
        style={{ minHeight: "600px" }}
      >
        <div className="border  border-gray-300 rounded-2xl grid place-items-center p-6 lg:p-0">
          <div className="text-center flex flex-col items-center gap-1 pt-2 pb-2">
            <Image
              className="rounded-full h-[70px] w-[70px]"
              src="/images/user1.JPG"
              alt="dp"
              width={80}
              height={80}
            />
            <h2 className="text-gray-500 font-black text-[20px]">Zia</h2>
            <p>Ecommerce</p>
            <FaQuoteRight className="inline-block p-2 w-[30px] h-[30px] text-[#ff9fac]" />
            <p className="max-w-[200px] text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
              quasi, cupiditate delectus, quis, hic et repudiandae eveniet sed
              odit pariatur repellat!
            </p>
          </div>
        </div>
        <div className="bg-red-600 bg-[url(/images/banner3.jpg)] bg-cover rounded-2xl grid place-items-center p-4">
          <div className="bg-[#ffffffab] min-w-[270px] sm:min-w-[300px] md:min-w-[500px] rounded-xl py-8 sm:px-8 px-2 grid place-items-center gap-3">
            <button className="bg-black text-white p-2 rounded-md">
              25% DISCOUNT
            </button>
            <h2 className="font-extrabold text-2xl text-[#272727]">
              Summer Collection
            </h2>
            <p className="text-gray-500 text-[20px]">
              Starting @ RM180 <b>Shop Now</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
