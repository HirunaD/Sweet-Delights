import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-pink-600">
          CakeShop
        </Link>
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:text-pink-600">Home</Link></li>
          <li><Link to="/menu" className="hover:text-pink-600">Menu</Link></li>
          <li><Link to="/custom-cake" className="hover:text-pink-600">Custom Cake</Link></li>
          <li><Link to="/orders" className="hover:text-pink-600">Orders</Link></li>
          <li><Link to="/contact" className="hover:text-pink-600">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
