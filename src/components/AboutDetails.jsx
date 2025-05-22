import { useRef, useState, useEffect } from "react"
import { images } from "../assets/images"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6"
import AboutContent from "./AboutContent"

export default function AboutDetails({ short = false }) {
  const teamScrollRef = useRef(null)
  const execScrollRef = useRef(null)

  const [teamScroll, setTeamScroll] = useState({ left: false, right: false })
  const [execScroll, setExecScroll] = useState({ left: false, right: false })

  const checkScroll = (ref, setScroll) => {
    if (!ref.current) return
    const { scrollLeft, scrollWidth, clientWidth } = ref.current
    setScroll({
      left: scrollLeft > 0,
      right: scrollLeft + clientWidth < scrollWidth - 1,
    })
  }

  useEffect(() => {
    checkScroll(teamScrollRef, setTeamScroll)
    checkScroll(execScrollRef, setExecScroll)

    const handleResize = () => {
      checkScroll(teamScrollRef, setTeamScroll)
      checkScroll(execScrollRef, setExecScroll)
    }

    const teamRef = teamScrollRef.current
    const execRef = execScrollRef.current

    teamRef?.addEventListener("scroll", () => checkScroll(teamScrollRef, setTeamScroll))
    execRef?.addEventListener("scroll", () => checkScroll(execScrollRef, setExecScroll))
    window.addEventListener("resize", handleResize)

    return () => {
      teamRef?.removeEventListener("scroll", () => checkScroll(teamScrollRef, setTeamScroll))
      execRef?.removeEventListener("scroll", () => checkScroll(execScrollRef, setExecScroll))
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const scroll = (ref, direction) => {
    ref.current?.scrollBy({
      left: direction === "left" ? -320 : 320,
      behavior: "smooth",
    })
  }

  const teamMembers = [
    { name: "Alice Bright", role: "Designer", img: images.UserOne },
    { name: "Michael West", role: "Developer", img: images.UserTwo },
    { name: "Sandra Lee", role: "Content Writer", img: images.UserThree },
    { name: "Robert Paul", role: "Product Manager", img: images.UserFour },
  ]

  const executives = [
    { name: "Jane Doe", role: "Chief Executive Officer", img: images.CEO },
    { name: "John Smith", role: "Chief Technology Officer", img: images.CTO },
    { name: "Emily Johnson", role: "Chief Operating Officer", img: images.COO },
    { name: "David Lee", role: "Chief Marketing Officer", img: images.CMO },
  ]

  return (
    <>
      <AboutContent short={short} />

      {!short && (
        <div className="max-w-6xl mx-auto px-2 text-center">
          <h3 className="text-2xl font-bold text-dark mb-8 select-none">Meet the Team</h3>

          <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8 px-6">
            {teamMembers.map(({ name, role, img }, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <img
                  src={img}
                  alt={name}
                  className="rounded-2xl w-full h-72 object-cover transition-transform duration-300 hover:scale-105 shadow-lg"
                />
                <h4 className="mt-4 text-lg font-semibold">{name}</h4>
                <p className="text-gray-600 text-sm">{role}</p>
              </div>
            ))}
          </div>

          <div className="relative md:hidden mt-2">
            <button
              onClick={() => scroll(teamScrollRef, "left")}
              disabled={!teamScroll.left}
              className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 p-3 bg-primary text-white rounded-full shadow-md transition-opacity duration-300
                ${teamScroll.left ? "opacity-100 hover:bg-primary/90" : "opacity-40 cursor-not-allowed"}`}
              aria-label="Scroll left"
            >
              <FaChevronLeft size={20} />
            </button>

            <div ref={teamScrollRef} className="flex gap-6 overflow-x-auto px-6 no-scrollbar">
              {teamMembers.map(({ name, role, img }, i) => (
                <div key={i} className="shrink-0 w-56 flex flex-col items-center text-center">
                  <img
                    src={img}
                    alt={name}
                    className="rounded-2xl h-56 w-full object-cover transition-transform duration-300 hover:scale-105 shadow-md"
                  />
                  <h4 className="mt-3 text-base font-semibold">{name}</h4>
                  <p className="text-sm text-gray-500">{role}</p>
                </div>
              ))}
            </div>

            <button
              onClick={() => scroll(teamScrollRef, "right")}
              disabled={!teamScroll.right}
              className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 p-3 bg-primary text-white rounded-full shadow-md transition-opacity duration-300
                ${teamScroll.right ? "opacity-100 hover:bg-primary/90" : "opacity-40 cursor-not-allowed"}`}
              aria-label="Scroll right"
            >
              <FaChevronRight size={20} />
            </button>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold text-dark mb-8 select-none">Executive Leadership</h3>

            <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8 px-6">
              {executives.map(({ name, role, img }, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <img
                    src={img}
                    alt={name}
                    className="rounded-2xl w-full h-72 object-cover transition-transform duration-300 hover:scale-105 shadow-lg"
                  />
                  <h4 className="mt-4 text-lg font-semibold">{name}</h4>
                  <p className="text-gray-600 text-sm">{role}</p>
                </div>
              ))}
            </div>

            <div className="relative md:hidden mt-2">
              <button
                onClick={() => scroll(execScrollRef, "left")}
                disabled={!execScroll.left}
                className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 p-3 bg-primary text-white rounded-full shadow-md transition-opacity duration-300
                  ${execScroll.left ? "opacity-100 hover:bg-primary/90" : "opacity-40"}`}
                aria-label="Scroll left"
              >
                <FaChevronLeft size={20} />
              </button>

              <div ref={execScrollRef} className="flex gap-6 overflow-x-auto px-6 no-scrollbar">
                {executives.map(({ name, role, img }, i) => (
                  <div key={i} className="shrink-0 w-56 flex flex-col items-center text-center">
                    <img
                      src={img}
                      alt={name}
                      className="rounded-2xl h-56 w-full object-cover transition-transform duration-300 hover:scale-105 shadow-md"
                    />
                    <h4 className="mt-3 text-base font-semibold">{name}</h4>
                    <p className="text-sm text-gray-500">{role}</p>
                  </div>
                ))}
              </div>

              <button
                onClick={() => scroll(execScrollRef, "right")}
                disabled={!execScroll.right}
                className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 p-3 bg-primary text-white rounded-full shadow-md transition-opacity duration-300
                  ${execScroll.right ? "opacity-100 hover:bg-primary/90" : "opacity-40"}`}
                aria-label="Scroll right"
              >
                <FaChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
