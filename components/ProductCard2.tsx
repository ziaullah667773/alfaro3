import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

interface PropsType {
    img: string;
    title: string;
    desc: string;
    rating: number;
    price: string;
    handle: string;
    imageAlt?: string;
}

const generateRating = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        stars.push(
            i <= rating
                ? <AiFillStar key={i} className="text-[#FF9529] text-[20px]" />
                : <AiOutlineStar key={i} className="text-[#FF9529] text-[20px]" />
        );
    }
    return <div className="flex gap-1">{stars}</div>;
};

const ProductCard2: React.FC<PropsType> = ({ img, title, desc, rating, price, handle, imageAlt }) => {
    console.log("Rendering ProductCard2 for handle:", handle);
    return (
        <Link href={`/products/${handle}`} legacyBehavior>
            <a className="block p-4 rounded-xl max-w-[400px] transition-transform transform hover:shadow-lg hover:scale-105 hover:border-blue-500 group cursor-pointer">
                <div className="relative">
                    <Image
                        className="w-full h-auto bg-cover rounded-lg mt-2"
                        src={img}
                        alt={imageAlt || title}
                        width={200}
                        height={300}
                        layout="responsive"
                    />
                    <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out group-hover:bottom-1/2 group-hover:transform group-hover:translate-x-[-50%] group-hover:-translate-y-1/2 bg-transparent border border-blue-700 text-blue-700 py-2 px-4 rounded-lg hover:bg-blue-500 hover:bg-opacity-50 hover:text-white hover:border-blue-500">
                        Add to Cart
                    </button>
                </div>
                <div className="space-y-2 py-2">
                    <h2 className="text-[#ff9fca] font-medium uppercase">{title}</h2>
                    <p className="text-gray-500 max-w-[150px] truncate">{desc}</p>
                    {generateRating(rating)}
                    <div className="flex gap-4">
                        <span className="font-bold">RM {price}.00</span>
                        <del className="text-gray-500 font-normal">
                            RM{parseInt(price, 10) + 55}.00
                        </del>
                    </div>
                </div>
            </a>
        </Link>
    );
};

export default ProductCard2;
