import { reviews } from "../../constants/Home/riviews";

const Feedbacks = () => {

  return (
    <section className="bg-gray-100 px-6 py-12">
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

export default Feedbacks;
