import { Link } from 'react-router-dom';
import { cakes } from '../../constants/Home/cakeTypes';

const FeaturedProducts = () => {

  return (
    <section className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Our Bestsellers</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cakes.map((cake) => (
          <div key={cake.id} className="bg-white shadow-lg rounded-lg p-4 text-center">
            <img src={cake.image} alt={cake.name} className="h-40 w-full object-cover rounded-md" />
            <h3 className="text-xl font-semibold mt-4">{cake.name}</h3>
            <p className="text-pink-600 font-bold">{cake.price}</p>
            <Link
              to={`/product/${cake.id}`}
              className="inline-block mt-4 bg-pink-600 text-white px-4 py-2 rounded-full hover:bg-pink-700"
            >
              Order Now
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
