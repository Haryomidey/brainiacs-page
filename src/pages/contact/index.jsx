import { useState } from "react"
import Header from "../../components/Header"
import Hero from "../../components/Hero"
import ContactForm from "../../components/ContactForm"
import Footer from "../../components/Footer"
import { images } from "../../assets/images"
import { FaWhatsapp, FaInstagram, FaLinkedin, FaFacebookF } from "react-icons/fa6"

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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.095409200669!2d6.553999814402888!3d9.613478093132846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104dd7be0a24de7f%3A0x9e6475e5e3e7ea4!2sMinna%2C%20Niger%20State%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1716365346922!5m2!1sen!2sng"
            allowFullScreen=""
            loading="lazy"
            onLoad={() => setMapLoaded(true)}
          ></iframe>
        </div>

        <div className="mb-10 text-center">
          <h2 className="text-xl font-semibold mb-4">Connect with us</h2>
          <div className="flex justify-center gap-6 text-2xl text-primary">
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition">
              <FaWhatsapp />
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
