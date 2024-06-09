//  'use client '
// import React from 'react'
// import Slider from 'react-slick'
// import Slide from './Slide';

// const Hero = () => {
     
//     var settings = {
//         dots:true,
//         infinite:true,
//         slideToShow:1,
//         slidesToScroll:1,
//         autoplay:true,
//         pauseOnHover:false,

//     };
//     const slideData=[
//         {
//             id:0,
//             img:'/banner1.jpg',
//             title:'Trending Item',
//             mainTittle:"WOMEN'S LATEST FASHION SALE",
//             price:'RM 199',
//         },
//         {
//             id:1,
//             img:'/banner2.jpg',
//             title:'Trending Item',
//             mainTittle:"WOMEN'S LATEST FASHION SALE",
//             price:'RM 199',
//         },
//         {
//             id:2,
//             img:'/banner3.jpg',
//             title:'Trending Item',
//             mainTittle:"WOMEN'S LATEST FASHION SALE",
//             price:'RM 199',
//         },
//     ]

//   return (
//     <div>
//         <div className='container pt-6 lg:pt-0'>
//             <Slider {...settings}>
//                 {slideData.map((item)=>
//                 (
//                     <Slide key={item.id} img={item.img} title={item.title} mainTittle={item.mainTittle} price={item.price} />
//                 )
//                 )}
//             </Slider>
//         </div>
//     </div>
//   )
// }

// export default Hero
'use client'
import React from 'react';
import Slider from 'react-slick';
import Slide from './Slide';

// Import required CSS files for react-slick


const Hero = () => {
    // Slider settings
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false,
        autoplaySpeed: 3000, // Adjust speed as needed
    };

    // Array of slide data
    const slideData = [
        {
            id: 0,
            img: '/images/banner1.jpg',
            title: 'Trending Item',
            mainTittle: "WOMEN'S LATEST FASHION SALE",
            price: 'RM 199',
        },
        {
            id: 1,
            img: '/images/banner2.jpg',
            title: 'Trending Item',
            mainTittle: "WOMEN'S LATEST FASHION SALE",
            price: 'RM 199',
        },
        {
            id: 2,
            img: '/images/banner3.jpg',
            title: 'Trending Item',
            mainTittle: "WOMEN'S LATEST FASHION SALE",
            price: 'RM 199',
        },
    ];

    return (
       <div>
         <div className='container mx-auto pt-6 lg:pt-0'>
            <Slider {...settings}>
                {slideData.map((item) => (
                    <Slide
                        key={item.id}
                        img={item.img}
                        title={item.title}
                        mainTittle={item.mainTittle}
                        price={item.price}
                    />
                ))}
            </Slider>
        </div>
       </div>
    );
};

export default Hero;
