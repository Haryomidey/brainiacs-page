import Header from '../../components/Header'
import Hero from '../../components/Hero'
import AboutDetails from '../../components/AboutDetails'
import Footer from '../../components/Footer'
import { images } from '../../assets/images'

export default function About() {
  return (
    <main>
      <Header />
      <Hero title="About Us" subtitle="Learn more about our vision, mission, and the team behind our success." backgroundImage={images.AboutImage} />
      <section className="bg-light py-12">
        <AboutDetails />
      </section>
      <Footer />
    </main>
  )
}
