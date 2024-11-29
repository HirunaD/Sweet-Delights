import React from "react";
import { Link } from "react-router-dom";

interface MenuItemProps {
  name: string;
  price: string;
  image: string;
  id: number;
}

const MenuItem: React.FC<MenuItemProps> = ({ name, price, image, id }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 text-center">
      <img
        src={image}
        alt={name}
        className="h-40 w-full object-cover rounded-md"
      />
      <h3 className="text-xl font-semibold mt-4">{name}</h3>
      <p className="text-pink-600 font-bold">{price}</p>
      <Link
        to={`/product/${id}`}
        className="inline-block mt-4 bg-pink-600 text-white px-4 py-2 rounded-full hover:bg-pink-700"
      >
        View
      </Link>
    </div>
  );
};

export default MenuItem;
