export default function AboutContent({ short }) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 text-center">
      <h2 className="text-2xl sm:text-4xl font-extrabold text-primary mb-6 relative inline-block border-b-4 border-primary pb-1">
        Who We Are
      </h2>
      <p className="text-sm sm:text-xl text-muted max-w-3xl mx-auto mb-16 leading-relaxed tracking-wide">
        We deliver the best and most reliable software technology solutions to improve IT efficiency and business profitability.
      </p>

      {!short && (
        <>
          <section className="max-w-3xl mx-auto mb-16 text-left">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-primary mb-4 border-l-4 border-primary pl-4">
              Our Vision
            </h2>
            <p className="text-sm sm:text-xl text-muted leading-relaxed tracking-wide">
              To be a successful company that helps our customers apply technology to solve their problems with ease, fulfilling customer needs, and driven by innovation.
            </p>
          </section>

          <section className="max-w-3xl mx-auto mb-20 text-left">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-primary mb-4 border-l-4 border-primary pl-4">
              Our Mission
            </h2>
            <p className="text-sm sm:text-xl text-muted leading-relaxed tracking-wide">
              To deliver the best possible and reliable software technology solutions and to be the partner of choice for service providers, governments, and enterprises globally.
            </p>
          </section>
        </>
      )}
    </div>
  )
}
