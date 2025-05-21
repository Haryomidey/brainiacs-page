export default function ContactForm() {
  return (
    <form className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-dark">Name</label>
        <input type="text" className="w-full mt-1 border border-gray-300 rounded px-3 py-2" />
      </div>
      <div>
        <label className="block text-sm font-medium text-dark">Email</label>
        <input type="email" className="w-full mt-1 border border-gray-300 rounded px-3 py-2" />
      </div>
      <div>
        <label className="block text-sm font-medium text-dark">Message</label>
        <textarea rows="4" className="w-full mt-1 border border-gray-300 rounded px-3 py-2" />
      </div>
      <button type="submit" className="bg-primary text-white px-4 py-2 rounded hover:bg-secondary transition">
        Send Message
      </button>
    </form>
  )
}
