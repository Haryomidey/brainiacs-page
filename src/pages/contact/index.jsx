import { useState } from "react"
import Header from "../../components/Header"
import Hero from "../../components/Hero"
import ContactForm from "../../components/ContactForm"
import Footer from "../../components/Footer"
import { images } from "../../assets/images"
import { FaWhatsapp, FaInstagram, FaLinkedin, FaFacebookF, FaXTwitter } from "react-icons/fa6"

export default function Contact() {
  const [mapLoaded, setMapLoaded] = useState(false)

  return (
    <main>
      <Header />
      <Hero
        title="Contact Us"
        subtitle="We'd love to hear from you!"
        backgroundImage={images.ContactImage}
      />
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="mb-8 relative">
          {!mapLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg z-10">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
            </div>
          )}
          <iframe
            className="w-full h-64 rounded-lg relative z-0"
            src="https://www.google.com/maps?q=HOUSE+NO.+9,+LONDON+ST,+DUTSEN+KURA+GWARI,+MINNA,+NIGER,+NIGERIA&output=embed"
            allowFullScreen
            loading="lazy"
            onLoad={() => setMapLoaded(true)}
          ></iframe>

        </div>

        <div className="mb-10 text-center">
          <h2 className="text-xl font-semibold mb-4">Connect with us</h2>
          <div className="flex justify-center gap-6 text-2xl text-primary">
            <a href="https://x.com/globalbrainiacs?s=21" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800 transition">
              <FaXTwitter />
            </a>
            <a href="https://instagram.com/dummyprofile" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/share/1NsPGTRtTi/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
              <FaFacebookF />
            </a>
            <a href="https://linkedin.com/in/dummyprofile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition">
              <FaLinkedin />
            </a>
          </div>
        </div>

        <ContactForm />
      </section>
      <Footer />
    </main>
  )
}
