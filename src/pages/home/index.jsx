import Header from '../../components/Header'
import Hero from '../../components/Hero'
import AboutDetails from '../../components/AboutDetails'
import Testimonials from '../../components/Testimonials'
import CTA from '../../components/CTA'
import Footer from '../../components/Footer'
import { images } from '../../assets/images'
import FAQs from '../../components/FAQs'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero backgroundImage={images.HomeImage}/>
      <section className="bg-light py-12">
        <AboutDetails short />
      </section>
      <section className="py-12">
        <Testimonials />
      </section>
      <section className="bg-primary py-12 text-white px-5">
        <CTA />
      </section>
      <section className="py-12">
        <FAQs />
      </section>
      <Footer />
    </main>
  )
}
