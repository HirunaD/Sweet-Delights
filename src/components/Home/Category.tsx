import React from "react";
import { Link } from "react-router-dom";

interface CategoryProps {
  category: string;
  image: string;
}

const CategoryItems: React.FC<CategoryProps> = ({ category, image }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 text-center">
      <img
        src={image}
        alt={category}
        className="h-40 w-full object-cover rounded-md"
      />
      <h3 className="text-xl font-semibold mt-4">{category}</h3>
      <Link
        to={`/menu/${category}`}
        className="inline-block mt-4 bg-pink-600 text-white px-4 py-2 rounded-full hover:bg-pink-700"
      >
        View
      </Link>
    </div>
  );
};

export default CategoryItems;
