import  { useState } from 'react';
import { cakes } from '../../constants/Home/cakeTypes';
import MenuItem from '../../components/Menu/MenuItem';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Get unique categories
  const categories = ['All', ...new Set(cakes.map((cake) => cake.category))];

  // Filter cakes by selected category
  const filteredCakes =
    selectedCategory === 'All'
      ? cakes
      : cakes.filter((cake) => cake.category === selectedCategory);

  return (
    <section className="container mx-auto px-6 my-12">
      <h2 className="text-4xl font-bold text-center mb-8">Our Menu</h2>

      {/* Category Buttons */}
      <div className="flex justify-center mb-6 space-x-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full border ${
              selectedCategory === category ? 'bg-pink-600 text-white' : 'bg-white text-pink-600'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Display Cakes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredCakes.map((cake) => (
          <MenuItem key={cake.id} name={cake.name} price={cake.price} image={cake.image} />
        ))}
      </div>
    </section>
  );
};

export default Menu;
