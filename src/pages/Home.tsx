import FeaturedProducts from '../components/FeaturedProducts'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Testimonials from '../components/Testimonials'
import Hero from '../sections/Home/Hero'

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default Home
