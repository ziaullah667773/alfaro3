// "use client";
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { BsChevronUp, BsSliders2Vertical } from "react-icons/bs";

// const Filter = () => {
//   const [showFilter, setShowFilter] = useState<boolean>(false);
//   const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
//   const [selectedSize, setSelectedSize] = useState<string[]>([]);
//   const [allHexValues, setAllHexValues] = useState<string[]>([]);
//   const [selectedHexValues, setSelectedHexValues] = useState<string[]>([]);
//   const [price, setPrice] = useState({ min: 0, max: 199 });
//   const handlMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value =
//       e.target.name === "min" ? parseInt(e.target.value) : e.target.value;
//     setPrice({
//       ...price,
//       [e.target.name]: value,
//     });
//   };
//   const handlMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value =
//       e.target.name === "max" ? parseInt(e.target.value) : e.target.value;
//     setPrice({
//       ...price,
//       [e.target.name]: value,
//     });
//   };
//   const toggleCategory = (category: string) => {
//     setSelectedCategories((prevCategories) =>
//       prevCategories.includes(category)
//         ? prevCategories.filter((c) => c !== category)
//         : [...prevCategories, category]
//     );
//   };
//   const toggleSize = (size: string) => {
//     setSelectedSize((prevSize) =>
//       prevSize.includes(size)
//         ? prevSize.filter((s) => s !== size)
//         : [...prevSize, size]
//     );
//   };
//   const toggleColor = (color: string) => {
//     setSelectedHexValues((prevColor) =>
//       prevColor.includes(color)
//         ? prevColor.filter((s) => s !== color)
//         : [...prevColor, color]
//     );
//   };
//   const getAllColors = async () => {
//     try {
//       const response = await axios.get("/api/color");
//       return response.data;
//     } catch (error) {
//       console.error("error", error);
//       return null;
//     }
//   };

//   useEffect(() => {
//     getAllColors().then((allColors) => {
//       if (allColors) {
//         const hextSet = new Set<string>();
//         allColors.forEach((element: any) => {
//           const colors = element.color.split(",");
//           colors.forEach((color: string) => {
//             const hextValue = color.replace("#", "");
//             hextSet.add(hextValue);
//           });
//         });
//         const uniqueHexValues: string[] = Array.from(hextSet);
//         setAllHexValues(uniqueHexValues);
//       }
//     });
//   }, []);
//   const allHexValue = allHexValues;
//   return (
//     <div className="relative">
//       <div
//         className={`md:w-[250px] border-l-[0.5px] border-r-[0.5px] ${
//           showFilter ? "max-md:w-[250px]" : "w-0 max-md:invisible"
//         }`}
//       >
//         <div className="flex item-center justify-between px-5 py-4 border-b-[0.5px]">
//           <h1 className="text-neutral-800">Filters</h1>
//           <BsSliders2Vertical size={20} className="text-neutral-600" />
//         </div>
//         <div className="flex flex-col py-3 pb-5 text-sm text-neutral-600 border-b-[0.5px]">
//           <span
//             className={`py-3 px-5 ${
//               selectedCategories.includes("Abaya") ? "bg-purple-500" : ""
//             }`}
//             onClick={() => toggleCategory("Abaya")}
//           >
//             Abaya
//           </span>
//           <span
//             className={`py-3 px-5 ${
//               selectedCategories.includes("Baju Kurung") ? "bg-purple-500" : ""
//             }`}
//             onClick={() => toggleCategory("Abaya")}
//           >
//             Baju Kurug
//           </span>
//           <span
//             className={`py-3 px-5 ${
//               selectedCategories.includes("Tudung") ? "bg-purple-500" : ""
//             }`}
//             onClick={() => toggleCategory("Tudung")}
//           >
//             Tudung
//           </span>
//         </div>
//         <div className="border-b-[0.5px] pb-10">
//           <div className="flex items-center justify-between px-5 py-4 border-b-[0.5px] mb-5">
//             <h1 className="text-neutral-800">Prices</h1>
//             <BsChevronUp size={18} className="text-neutral-600" />
//           </div>
//           <div className="grid grid-cols-2 gap-5 px-5 overflow-hidden">
//             <div className="flex flex-col justify-center items-center ">
//               <label htmlFor="" className="text-[15px] opacity-75">
//                 Min
//               </label>
//               <div className="relative">
//                 <span className="absolute left-3 top-1 ">RM </span>
//                 <input
//                   type="number"
//                   name="min"
//                   onChange={handlMinChange}
//                   value={price.min}
//                   className="w-full outline-none border-[1px] rounded-lg px-2 py-[2px] text-center"
//                 />
//               </div>
//             </div>
//             <div className="flex flex-col justify-center items-center ">
//               <label htmlFor="" className="text-[15px] opacity-75">
//                 Max
//               </label>
//               <div className="relative">
//                 <span className="absolute left-3 top-1 ">RM </span>
//                 <input
//                   type="number"
//                   name="max"
//                   onChange={handlMaxChange}
//                   value={price.max}
//                   className="w-full outline-none border-[1px] rounded-lg px-2 py-[2px] text-center"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="border-b-[0.5px] ">
//           <div className="flex items-center justify-between py-4 px-5 border-b-[0.5] mb-5">
//             <h1 className="text-neutral-800">Colors</h1>
//           </div>
//           <ul className="grid grid-cols-4 px-5 gap-5">
//             {allHexValue.map((hexValue, index) => (
//               <li
//                 key={index}
//                 className={`w-[40px] h-[40px] rounded-2xl border-[0.5px] border-neutral-300 ${
//                   selectedHexValues.includes(`#${hexValue}`)
//                     ? "shadow-2xl opacity-25"
//                     : ""
//                 }`}
//                 style={{ backgroundColor: `#${hexValue}` }}
//                 onClick={() => toggleColor(`#${hexValue}`)}
//               ></li>
//             ))}
//           </ul>
//           <div className="sizes">
//             <div className="flex items-center justify-between py-4 px-5 border-b-[0.5] mb-5">
//               <h1 className="text-neutral-800">Sizes</h1>
//             </div>
//             <ul className="grid grid-cols-4 px-5 gap-5">
//               <li
//                 className={`border-[0.5px] rounded-lg text-center text-[14px] py-[2px] cursor-pointer ${
//                   selectedSize.includes("SM") ? "bg-neutral-900 text-white" : ""
//                 }`}
//                 onClick={()=>toggleSize('SM')}
//               >
//                 SM
//               </li>
//               <li
//                 className={`border-[0.5px] rounded-lg text-center text-[14px] py-[2px] cursor-pointer ${
//                   selectedSize.includes("SM") ? "bg-neutral-900 text-white" : ""
//                 }`}
//                 onClick={()=>toggleSize('S')}
//               >
//                 S
//               </li>
//               <li
//                 className={`border-[0.5px] rounded-lg text-center text-[14px] py-[2px] cursor-pointer ${
//                   selectedSize.includes("SM") ? "bg-neutral-900 text-white" : ""
//                 }`}
//                 onClick={()=>toggleSize('M')}
//               >
//                 M
//               </li>
//               <li
//                 className={`border-[0.5px] rounded-lg text-center text-[14px] py-[2px] cursor-pointer ${
//                   selectedSize.includes("SM") ? "bg-neutral-900 text-white" : ""
//                 }`}
//                 onClick={()=>toggleSize('L')}
//               >
//                 L
//               </li>
//               <li
//                 className={`border-[0.5px] rounded-lg text-center text-[14px] py-[2px] cursor-pointer ${
//                   selectedSize.includes("SM") ? "bg-neutral-900 text-white" : ""
//                 }`}
//                 onClick={()=>toggleSize('XL')}
//               >
//                 XL
//               </li>
//               <li
//                 className={`border-[0.5px] rounded-lg text-center text-[14px] py-[2px] cursor-pointer ${
//                   selectedSize.includes("SM") ? "bg-neutral-900 text-white" : ""
//                 }`}
//                 onClick={()=>toggleSize('XXL')}
//               >
//                 XXL
//               </li>
//               <li
//                 className={`border-[0.5px] rounded-lg text-center text-[14px] py-[2px] cursor-pointer ${
//                   selectedSize.includes("SM") ? "bg-neutral-900 text-white" : ""
//                 }`}
//                 onClick={()=>toggleSize('XXXL')}
//               >
//                 XXXL
//               </li>
              
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Filter;
// Filter.tsx
"use client";
import axios from "axios";
import { error } from "console";
import React, { useEffect, useState } from "react";
import { BsChevronUp, BsSliders2Vertical } from "react-icons/bs";

interface Product {
  handle: string;
  title: string;
  description: string;
  priceRange: {
    minVariantPrice: {
      amount: string;
    };
  };
  tags: string[];
}

interface FilterProps {
  products: Product[];
  onFilter: (filteredProducts: Product[]) => void;
}

const Filter: React.FC<FilterProps> = ({ products, onFilter }) => {
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [allHexValues, setAllHexValues] = useState<string[]>([]);
  const [selectedHexValues, setSelectedHexValues] = useState<string[]>([]);
  const [price, setPrice] = useState({ min: 0, max: 199 });

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice((prevPrice) => ({
      ...prevPrice,
      min: parseInt(e.target.value),
    }));
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice((prevPrice) => ({
      ...prevPrice,
      max: parseInt(e.target.value),
    }));
  };

  const toggleCategory = (category: string) => {
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((c) => c !== category)
        : [...prevCategories, category]
    );
  };

  const toggleSize = (size: string) => {
    setSelectedSizes((prevSizes) =>
      prevSizes.includes(size)
        ? prevSizes.filter((s) => s !== size)
        : [...prevSizes, size]
    );
  };

  const toggleColor = (color: string) => {
    setSelectedHexValues((prevColors) =>
      prevColors.includes(color)
        ? prevColors.filter((c) => c !== color)
        : [...prevColors, color]
    );
  };

  useEffect(() => {
    if (products && products.length > 0) {
      const hexSet = new Set<string>();
      products.forEach((product) => {
        product.tags.forEach((tag) => {
          if (tag.startsWith("#")) {
            hexSet.add(tag.replace("#", ""));
          }
        });
      });
      setAllHexValues(Array.from(hexSet));
    }
  }, [products]);

  useEffect(() => {
    const filteredProducts = products && products.length > 0 ? products.filter((product) => {
      const productPrice = parseFloat(product.priceRange.minVariantPrice.amount);
      const productColors = product.tags.filter((tag) => tag.startsWith("#"));
      const productSizes = product.tags.filter((tag) => tag.match(/^(SM|S|M|L|XL|XXL|XXXL)$/));
    
      return (
        (!selectedCategories.length || selectedCategories.includes(product.handle)) &&
        (!selectedSizes.length || selectedSizes.some((size) => productSizes.includes(size))) &&
        (!selectedHexValues.length || selectedHexValues.some((color) => productColors.includes(color))) &&
        productPrice >= price.min &&
        productPrice <= price.max
      );
    }) : [];
    if (typeof onFilter === 'function') {
      onFilter(filteredProducts);
    } else {
      console.error('onFilter is not a function');
    }
  
    // onFilter(filteredProducts);
  }, [selectedCategories, selectedSizes, selectedHexValues, price, products, onFilter]);
  
  // useEffect(()=>{
  //   axios.get('/api/filterproduct',{
  //     params:{
  //       categories:selectedCategories,
  //       sizes:selectedSizes,
  //       price:{
  //          min:price.min,
  //          max:price.max

  //       },
  //       colors:selectedHexValues
  //     },
  //     headers:{
  //       'Content-Type':'application/json'
  //     }
  //   })
  //   .then((response)=>{
  //     console.log("response",response.data)
  //   })
  //   .catch((error)=>{
  //     console.log('error',error)
  //   })
  // },[])

  return (
    <div className="relative">
      <div className={`md:w-[250px] border-l-[0.5px] border-r-[0.5px] ${showFilter ? "max-md:w-[250px]" : "w-0 max-md:invisible"}`}>
        <div className="flex item-center justify-between px-5 py-4 border-b-[0.5px]">
          <h1 className="text-neutral-800">Filters</h1>
          <BsSliders2Vertical size={20} className="text-neutral-600" />
        </div>
        <div className="flex flex-col py-3 pb-5 text-sm text-neutral-600 border-b-[0.5px]">
          <span className={`py-3 px-5 ${selectedCategories.includes("Abaya") ? "bg-purple-500" : ""}`} onClick={() => toggleCategory("Abaya")}>Abaya</span>
          <span className={`py-3 px-5 ${selectedCategories.includes("Baju Kurung") ? "bg-purple-500" : ""}`} onClick={() => toggleCategory("Baju Kurung")}>Baju Kurung</span>
          <span className={`py-3 px-5 ${selectedCategories.includes("Tudung") ? "bg-purple-500" : ""}`} onClick={() => toggleCategory("Tudung")}>Tudung</span>
        </div>
        <div className="border-b-[0.5px] pb-10">
          <div className="flex items-center justify-between px-5 py-4 border-b-[0.5px] mb-5">
            <h1 className="text-neutral-800">Prices</h1>
            <BsChevronUp size={18} className="text-neutral-600" />
          </div>
          <div className="grid grid-cols-2 gap-5 px-5 overflow-hidden">
            <div className="flex flex-col justify-center items-center">
              <label htmlFor="min" className="text-[15px] opacity-75">Min</label>
              <div className="relative">
                <span className="absolute left-3 top-1">RM </span>
                <input type="number" name="min" onChange={handleMinChange} value={price.min} className="w-full outline-none border-[1px] rounded-lg px-2 py-[2px] text-center" />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <label htmlFor="max" className="text-[15px] opacity-75">Max</label>
              <div className="relative">
                <span className="absolute left-3 top-1">RM </span>
                <input type="number" name="max" onChange={handleMaxChange} value={price.max} className="w-full outline-none border-[1px] rounded-lg px-2 py-[2px] text-center" />
              </div>
            </div>
          </div>
        </div>
        <div className="border-b-[0.5px]">
          <div className="flex items-center justify-between py-4 px-5 border-b-[0.5px] mb-5">
            <h1 className="text-neutral-800">Colors</h1>
          </div>
          <ul className="grid grid-cols-4 px-5 gap-5">
            {allHexValues.map((hexValue, index) => (
              <li key={index} className={`w-[40px] h-[40px] rounded-2xl border-[0.5px] border-neutral-300 ${selectedHexValues.includes(`#${hexValue}`) ? "shadow-2xl opacity-25" : ""}`} style={{ backgroundColor: `#${hexValue}` }} onClick={() => toggleColor(`#${hexValue}`)}></li>
            ))}
          </ul>
        </div>
        <div className="sizes">
          <div className="flex items-center justify-between py-4 px-5 border-b-[0.5px] mb-5">
            <h1 className="text-neutral-800">Sizes</h1>
          </div>
          <ul className="grid grid-cols-4 px-5 gap-5">
            {["SM", "S", "M", "L", "XL", "XXL", "XXXL"].map((size) => (
              <li key={size} className={`border-[0.5px] rounded-lg text-center text-[14px] py-[2px] cursor-pointer ${selectedSizes.includes(size) ? "bg-neutral-900 text-white" : ""}`} onClick={() => toggleSize(size)}>
                {size}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div onClick={()=>setShowFilter(!showFilter)} className="absolute md:hidden top-[20px] right-[-42px] rotate-90 bg-gray-100 px-2 rounded-t-sm cursor-pointer">
        Filters
      </div>
    </div>
  );
};

export default Filter;


