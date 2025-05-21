import { useRef, useState, useEffect } from "react"
import { images } from "../assets/images"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6"
import AboutContent from "./AboutContent"

export default function AboutDetails({ short = false }) {
  const scrollRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  const checkScroll = () => {
    if (!scrollRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
    setCanScrollLeft(scrollLeft > 0)
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1)
  }

  useEffect(() => {
    checkScroll()
    const refCurrent = scrollRef.current
    if (refCurrent) {
      refCurrent.addEventListener("scroll", checkScroll)
      window.addEventListener("resize", checkScroll)
    }
    return () => {
      if (refCurrent) refCurrent.removeEventListener("scroll", checkScroll)
      window.removeEventListener("resize", checkScroll)
    }
  }, [])

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -320 : 320,
        behavior: "smooth",
      })
    }
  }

  return (
    <>
      <AboutContent short={short} />

      {!short && (
        <div className="max-w-6xl mx-auto px-2 text-center">
          <h3 className="text-2xl font-bold text-dark mb-8 select-none">Meet the Team</h3>

          <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8 px-6">
            {[images.UserOne, images.UserTwo, images.UserThree, images.UserFour].map((img, i) => (
              <img
                key={i}
                src={img}
                alt="Team member"
                className="rounded-2xl w-full h-72 object-cover transition-transform duration-300 hover:scale-105 shadow-lg"
              />
            ))}
          </div>

          <div className="relative md:hidden mt-2">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 p-3 bg-primary text-white rounded-full shadow-md transition-opacity duration-300
                ${canScrollLeft ? "opacity-100 hover:bg-primary/90 cursor-pointer" : "opacity-40"}`}
              aria-label="Scroll left"
            >
              <FaChevronLeft size={20} />
            </button>

            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto px-6 scroll-smooth no-scrollbar"
            >
              {[images.UserOne, images.UserTwo, images.UserThree, images.UserFour].map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="Team member"
                  className="rounded-2xl w-56 h-56 object-cover shrink-0 transition-transform duration-300 hover:scale-105 shadow-md"
                />
              ))}
            </div>

            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 p-3 bg-primary text-white rounded-full shadow-md transition-opacity duration-300
                ${canScrollRight ? "opacity-100 hover:bg-primary/90 cursor-pointer" : "opacity-40 cursor-not-allowed"}`}
              aria-label="Scroll right"
            >
              <FaChevronRight size={20} />
            </button>
          </div>
        </div>
      )}
    </>
  )
}
