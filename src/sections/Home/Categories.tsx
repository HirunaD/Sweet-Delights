import { cakes } from "../../constants/Home/cakeTypes";
import CategoryItems from "../../components/Home/Category";

const Categories = () => {
  const specialCakes = cakes.filter((cake) => cake.isSpecial);

  return (
    <section className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Our Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {specialCakes.map((cake) => (
          <CategoryItems
            key={cake.id}
            category={cake.category}
            image={cake.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Categories;
