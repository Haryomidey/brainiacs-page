import { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoMenuOutline } from "react-icons/io5";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)
  const closeSidebar = () => setIsSidebarOpen(false)

  return (
    <header className="bg-white shadow-md relative z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-primary text-xl font-bold">Brainiacs</Link>

        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-muted hover:text-primary">Home</Link>
          <Link to="/about" className="text-muted hover:text-primary">About</Link>
          <Link to="/contact" className="text-muted hover:text-primary">Contact</Link>
        </nav>

        <button
          className="md:hidden text-xl text-primary"
          onClick={toggleSidebar}
        >
          <IoMenuOutline />
        </button>
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={closeSidebar}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-64 max-w-[60%] bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 flex flex-col space-y-4">
          <Link to="/" className="text-muted hover:text-primary" onClick={closeSidebar}>Home</Link>
          <Link to="/about" className="text-muted hover:text-primary" onClick={closeSidebar}>About</Link>
          <Link to="/contact" className="text-muted hover:text-primary" onClick={closeSidebar}>Contact</Link>
        </div>
      </div>
    </header>
  )
}
