import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0 text-sm font-medium">
          &copy; {new Date().getFullYear()} Brainiacs. All rights reserved.
        </div>
        <div className="flex space-x-6 text-gray-400">
          <Link
            to="/facebook"
            className="hover:text-white transition-colors duration-300"
            aria-label="Facebook"
          >
            <FaFacebookF size={20} />
          </Link>
          <Link
            to="/twitter"
            className="hover:text-white transition-colors duration-300"
            aria-label="Twitter"
          >
            <FaTwitter size={20} />
          </Link>
          <Link
            to="/linkedin"
            className="hover:text-white transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={20} />
          </Link>
          <Link
            to="/instagram"
            className="hover:text-white transition-colors duration-300"
            aria-label="Instagram"
          >
            <FaInstagram size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
