import { useParams } from 'react-router-dom';
import { cakes } from '../../constants/Home/cakeTypes';

const Hero = () => {
  const params = useParams();
  const id = params.id ? parseInt(params.id, 10) : null;

  const product = cakes.find((cake) => cake.id === id);

  if (!product) {
    return <div className="container mx-auto text-center">Product not found!</div>;
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row items-center md:space-x-8">
        <img
          src={product.image}
          alt={product.name}
          className="w-[720px] md:w-1/2 h-[400px] object-cover rounded-lg shadow-lg"
        />
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-white text-2xl font-semibold mb-4">{product.price}</p>
          <p className="text-black mb-6">
            This delicious {product.name} is perfect for any occasion. Customize your order to make it extra special!
          </p>
          <button className="bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
