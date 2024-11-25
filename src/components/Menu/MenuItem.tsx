import React from 'react';

interface MenuItemProps {
  name: string;
  price: string;
  image: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ name, price, image }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 text-center">
      <img src={image} alt={name} className="h-40 w-full object-cover rounded-md" />
      <h3 className="text-xl font-semibold mt-4">{name}</h3>
      <p className="text-pink-600 font-bold">{price}</p>
    </div>
  );
};

export default MenuItem;
