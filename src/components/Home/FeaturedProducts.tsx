import { cakes } from '../../constants/Home/cakeTypes';
import MenuItem from '../Menu/MenuItem';

const FeaturedProducts = () => {
  // Filter only special menu items
  const specialCakes = cakes.filter((cake) => cake.isSpecial);

  return (
    <section className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Our Bestsellers</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {specialCakes.map((cake) => (
          <MenuItem key={cake.id} name={cake.name} price={cake.price} image={cake.image} id={cake.id} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
