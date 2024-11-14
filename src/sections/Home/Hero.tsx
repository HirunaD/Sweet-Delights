import { Link } from 'react-router-dom';
import heroImage from '../../assets/images/hero-cake.png';

const Hero = () => {
  return (
    <section
      className="bg-cover bg-center h-[80vh] flex items-center justify-center text-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="bg-black bg-opacity-50 p-10 rounded-xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Delicious Cakes for Every Occasion
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mt-4">
          Order your custom cake now and make your celebration special!
        </p>
        <Link
          to="/menu"
          className="mt-8 inline-block bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700 transition"
        >
          View Our Menu
        </Link>
      </div>
    </section>
  );
};

export default Hero;
