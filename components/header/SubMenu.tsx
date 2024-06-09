// import Link from "next/link";
// import React from "react";

// const menuList = [
//   "SHOP ALL",
//   "TUDUNG",
//   "BAJU",
//   "ABAYA",
//   "JUBAH",
//   "MEN COLLECTION",
//   "CONTACT",
//   "CAREER",
// ];

// const SubMenu = () => {
//   return (
//     <>
//       <div className="bg-[#232F3E] w-full p-2 flex items-center justify-center">
//         <div>
//           {menuList.map((item, idx) => {
//             return (
//               <Link
//                 href={`/${item}`}
//                 key={idx}
//                 className="mx-2 border border-transparent hover:border  hover:border-sky-500 rounded p-1"
//               >
//                 {item}
//               </Link>
//             );
//           })}
//         </div>
//         <div className="ml-24">
//           <h1 className="text-[#FEBD69] cursor-pointer hover:underline decoration-2 decoration-indigo-500">
//             Sign Out
//           </h1>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SubMenu;
import Link from 'next/link'
import React from 'react'

export const menuList = [
    {url:"/shopall", title:"SHOP ALL"},
     {url:"/tudung",title:"TUDUNG"},
    {url:"/baju",title:"BAJU"},
     {url:"/abaya",title:"ABAYA"},
     {url:"/jubah",title:"JUBAH"},
     {url:"/mencollection",title:"MEN'S COLLECTION"},
     {url:"/contact",title:"CONTACT"},
     {url:"/about",title:"ABOUT US"},
   ];

const SubMenu = () => {
  return (
    <div className='hidden lg:block text-black'>
      <div className='contaier'>
        <div className='flex w-fit gap-10 mx-auto font-medium py-4'> 
          
          <div>
            {
              menuList.map((item,idx)=>{
                return(
                  <Link href={item.url} key={idx} className='navbar__link relative p-1 mx-3'>
                    {item.title}
                  </Link>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubMenu