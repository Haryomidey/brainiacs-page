const testimonials = [
  { name: 'Jane Doe', quote: 'Amazing team! They really transformed our digital strategy.' },
  { name: 'John Smith', quote: 'Reliable and efficient service. Highly recommended.' },
  { name: 'Sarah Wilson', quote: 'Helped us scale our operations with innovative solutions.' },
]

export default function Testimonials() {
  return (
    <div className="max-w-5xl mx-auto px-4 text-center">
      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-dark mb-8">What Our Clients Say</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t, idx) => (
          <div key={idx} className="bg-white shadow-md p-6 rounded-lg">
            <p className="text-sm sm:text-base text-muted mb-4">"{t.quote}"</p>
            <p className="text-sm font-semibold text-dark">- {t.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
