import React from 'react';

type Props = {
  title: string;
  price: string;
  description: string;
  rating: number;
  numberComments: number;
  sizes?: string[];
  selectedSize?: string | null;
  setSelectedSize?: (size: string) => void;
  colors?: string[];
  selectedColor?: string | null;
  setSelectedColor?: (color: string) => void;
};

const Info: React.FC<Props> = ({
  title,
  price,
  description,
  rating,
  numberComments,
  sizes,
  selectedSize,
  setSelectedSize,
  colors,
  selectedColor,
  setSelectedColor
}) => {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-xl text-gray-800">${price}</p>
      <div dangerouslySetInnerHTML={{ __html: description }} className="text-gray-700"></div>
      <div className="flex items-center">
        <div className="text-yellow-500">
          {Array.from({ length: 5 }, (_, index) => (
            <span key={index}>{index < rating ? '★' : '☆'}</span>
          ))}
        </div>
        <p className="ml-2 text-gray-700">({numberComments} reviews)</p>
      </div>
      {sizes && sizes.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold">Size</h3>
          <div className="flex flex-wrap -mx-1 space-x-2">
            {sizes.map((size, index) => (
              <button
                key={index}
                onClick={() => setSelectedSize && setSelectedSize(size)}
                className={`border rounded px-3 py-1 mb-2 ${selectedSize === size ? 'border-blue-500' : 'border-gray-300'}`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      )}
      {colors && colors.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold">Color</h3>
          <div className="flex flex-wrap -mx-1 space-x-2">
            {colors.map((color, index) => (
              <button
                key={index}
                onClick={() => setSelectedColor && setSelectedColor(color)}
                className={`border rounded px-3 py-1 mb-2 ${selectedColor === color ? 'border-blue-500' : 'border-gray-300'} truncate`}
                style={{ maxWidth: '100px' }} // Adjust as needed for your design
              >
                {color}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Info;
