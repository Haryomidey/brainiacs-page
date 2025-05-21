import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="bg-white border border-primary/30 rounded-xl max-w-3xl mx-auto px-8 py-12 text-center shadow-sm">
      <h2 className="text-xl sm:text-3xl font-bold text-primary mb-4">
        Ready to work with us?
      </h2>
      <p className="text-gray-600 text-sm sm:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
        Get in touch today and let's build something amazing together.
      </p>
      <Link
        to="/contact"
        className="inline-block px-10 py-3 text-primary font-semibold border-2 border-primary rounded-lg hover:bg-primary hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        Contact Us
      </Link>
    </section>
  );
}
