import FeaturedProducts from '../components/Home/FeaturedProducts'
import Footer from '../components/Home/Footer'
import Navbar from '../components/Home/Navbar'
import Testimonials from '../components/Home/Testimonials'
import Hero from '../sections/Home/Hero'

function Home() {
  return (
    <div className='bg-pink-700'>
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default Home
