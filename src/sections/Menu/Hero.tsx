import { cakes } from "../../constants/Home/cakeTypes";
import MenuItem from "../../components/Menu/MenuItem";

const Menu = () => {
  return (
    <section className="container mx-auto my-12">
      <h2 className="text-3xl font-bold text-center mb-8">Our Menu</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {cakes.map((cake) => (
          <MenuItem
            key={cake.id}
            name={cake.name}
            price={cake.price}
            image={cake.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Menu;
