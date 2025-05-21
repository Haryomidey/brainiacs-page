export default function Hero({
  title = 'Welcome to Brainiacs',
  subtitle = 'Innovative and Reliable Software Solutions',
  backgroundImage = ''
}) {
  return (
    <section
      className="relative h-screen max-h-[650px] flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60" />

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-base sm:text-lg">{subtitle}</p>
      </div>
    </section>
  )
}
