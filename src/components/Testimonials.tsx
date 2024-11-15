
const Testimonials = () => {
  const reviews = [
    { id: 1, name: 'Alice', text: 'The best cake I’ve ever had! Highly recommended.' },
    { id: 2, name: 'John', text: 'Amazing service and delicious cakes.' },
    { id: 3, name: 'Emma', text: 'Perfect cake for my birthday party!' },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white shadow-lg rounded-lg p-6">
            <p className="text-gray-600 italic">"{review.text}"</p>
            <p className="mt-4 font-semibold text-pink-600">- {review.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
