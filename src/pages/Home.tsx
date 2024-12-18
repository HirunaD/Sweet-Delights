import Hero from '../sections/Home/Hero'
import Categories from '../sections/Home/Categories'
import Feedbacks from '../components/Home/Feedbacks'

function Home() {
  return (
    <div className='bg-pink-700'>
      <Hero />
      <Categories />
      <Feedbacks />
    </div>
  )
}

export default Home
