import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { cakes } from '../../constants/Home/cakeTypes';

const Hero = () => {
  const params = useParams();
  const navigate = useNavigate();
  const id = params.id ? parseInt(params.id, 10) : null;

  const [quantity, setQuantity] = useState(1);

  const product = cakes.find((cake) => cake.id === id);

  const handleAddToCart = () => {
    // console.log('Added to cart:', { ...product, quantity });
    alert(`${product.name} x ${quantity} has been added to your cart!`);
  };

  const handleBack = () => {
    navigate(-1); // Navigate to the previous page
  };

  const handleQuantityChange = (type) => {
    if (type === 'increase') {
      setQuantity((prev) => prev + 1);
    } else if (type === 'decrease' && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  if (!product) {
    return <div className="container mx-auto text-center">Product not found!</div>;
  }

  return (
    <div className="container mx-auto px-6 py-12 text-white">
      <div className="flex flex-col md:flex-row items-center md:space-x-8">
        <img
          src={product.image}
          alt={product.name}
          className="w-[720px] md:w-1/2 h-[400px] object-cover rounded-lg shadow-lg"
        />
        <div className="text-center md:text-left">
          <h1 className="text-5xl font-bold mb-2">{product.name}</h1>
          <p className="text-lg text-gray-300 mb-4">Product Code: {product.code || 'N/A'}</p>
          <p className="text-lg mb-6">
            The Vibe is located in Polhena, just steps from the lovely down south beach. Specializing in grilled meats
            and seafoods. The combination of unique taste and ambiance will captivate you and leave you wanting more.
          </p>
          <div className="flex items-center gap-4 mb-6">
            <p className="text-lg">Quantity:</p>
            <div className="flex items-center gap-2">
              <button
                className="bg-yellow-500 text-black px-4 py-2 rounded-md hover:bg-yellow-600"
                onClick={() => handleQuantityChange('decrease')}
              >
                -
              </button>
              <span className="px-4 py-2 bg-gray-800 rounded-md">{quantity}</span>
              <button
                className="bg-yellow-500 text-black px-4 py-2 rounded-md hover:bg-yellow-600"
                onClick={() => handleQuantityChange('increase')}
              >
                +
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <p className="line-through text-gray-400 text-lg mb-1">${product.originalPrice || '20.00'}</p>
              <p className="text-3xl text-yellow-500 font-bold">${product.price}</p>
            </div>
            <div className="flex gap-4">
              <button
                className="bg-gray-700 text-white px-6 py-2 rounded-full hover:bg-gray-800 border-2 border-yellow-500"
                onClick={handleBack}
              >
                Back
              </button>
              <button
                className="bg-yellow-500 text-black px-6 py-2 rounded-full hover:bg-yellow-600"
                onClick={() => alert('Order Now clicked!')}
              >
                Order Now
              </button>
              <button
                className="bg-yellow-500 text-black px-6 py-2 rounded-full hover:bg-yellow-600"
                onClick={handleAddToCart}
              >
                Add Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
