import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {

  const location = useLocation();

  const isActive = (path: string) =>
    location.pathname === path ? 'text-pink-400 font-bold' : 'text-black';

  return (
    <nav className="backdrop-blur-2xl p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4">
        <Link to="/" className="text-5xl font-bold text-pink-400 w-3/5 flex justify-end">
          Sweet Delights
        </Link>
        <ul className="flex font-semibold space-x-6">
          <li><Link to="/" className={`${isActive('/')} hover:text-pink-300`}>Home</Link></li>
          <li><Link to="/menu" className={`${isActive('/menu')} hover:text-pink-300`}>Menu</Link></li>
          <li><Link to="/custom-cake" className={`${isActive('/custom-cake')} hover:text-pink-300`}>Custom Cake</Link></li>
          <li><Link to="/orders" className={`${isActive('/orders')} hover:text-pink-300`}>Orders</Link></li>
          <li><Link to="/contact" className={`${isActive('/contact')} hover:text-pink-300`}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
