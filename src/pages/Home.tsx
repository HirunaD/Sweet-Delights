import FeaturedProducts from '../components/Home/FeaturedProducts'
import Testimonials from '../components/Home/Testimonials'
import Hero from '../sections/Home/Hero'

function Home() {
  return (
    <div className='bg-pink-700'>
      <Hero />
      <FeaturedProducts />
      <Testimonials />
    </div>
  )
}

export default Home
