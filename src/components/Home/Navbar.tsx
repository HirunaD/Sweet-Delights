import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="shadow-md bg-white/5 backdrop-blur-lg p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4">
        <Link to="/" className="text-5xl font-bold text-pink-300 w-3/5 flex justify-end">
          Sweet Delights
        </Link>
        <ul className="flex font-semibold space-x-6">
          <li><Link to="/" className="hover:text-pink-300">Home</Link></li>
          <li><Link to="/menu" className="hover:text-pink-300">Menu</Link></li>
          <li><Link to="/custom-cake" className="hover:text-pink-300">Custom Cake</Link></li>
          <li><Link to="/orders" className="hover:text-pink-300">Orders</Link></li>
          <li><Link to="/contact" className="hover:text-pink-300">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
