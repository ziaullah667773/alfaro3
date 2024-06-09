import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type Props = {
    imageUrls: string[];
};

const ImageGallery: React.FC<Props> = ({ imageUrls }) => {
    const [selectedImage, setSelectedImage] = useState(0);
    const mainSlider = useRef<Slider>(null);
    const thumbSlider = useRef<Slider>(null);

    const settingsMain = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: thumbSlider.current || undefined
    };

    const settingsThumbs = {
        slidesToShow: imageUrls.length < 4 ? imageUrls.length : 4,
        slidesToScroll: 1,
        asNavFor: mainSlider.current || undefined,
        focusOnSelect: true,
        centerMode: true,
        centerPadding: '10px',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: imageUrls.length < 3 ? imageUrls.length : 3,
                    centerMode: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: imageUrls.length < 2 ? imageUrls.length : 2,
                    centerMode: false,
                }
            }
        ]
    };

    return (
        <div className="w-full flex flex-col">
            <Slider {...settingsMain} ref={mainSlider} className="slider-main mb-5">
                {imageUrls.map((url, index) => (
                    <div key={index} className="w-full h-96 relative">
                        <Image src={url} alt={`Product Image ${index + 1}`} layout="fill" objectFit="cover" />
                    </div>
                ))}
            </Slider>
            <Slider {...settingsThumbs} ref={thumbSlider} className="slider-nav">
                {imageUrls.map((url, index) => (
                    <div key={index} className="p-1">
                        <div className={`cursor-pointer border ${selectedImage === index ? 'border-blue-500' : 'border-transparent'}`}>
                            <Image
                                src={url}
                                alt={`Product Thumbnail ${index + 1}`}
                                width={100}
                                height={100}
                                onClick={() => setSelectedImage(index)}
                            />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ImageGallery;
