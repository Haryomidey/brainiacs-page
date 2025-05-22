import { FaCode, FaUsers, FaRocket, FaCogs, FaShieldAlt, FaAws  } from "react-icons/fa"
import { 
    SiReact, 
    SiNextdotjs, 
    SiNodedotjs, 
    SiTailwindcss, 
    SiMongodb, 
    SiPostgresql, 
    SiDocker 
} from "react-icons/si"
import { MdBusinessCenter, MdOutlineSecurity } from "react-icons/md"
import CTA from "../../components/CTA"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Hero from "../../components/Hero"
import { images } from "../../assets/images"

const Portfolio = () => {
    return (
        <main>
            <Header />

            <Hero 
                title="Our Portfolio"
                subtitle="Innovative Software Solutions for Businesses, Governments & Service Providers"
                backgroundImage={images.PortfolioImage}
            />

            <section className="max-w-6xl mx-auto px-4 py-16 space-y-20">
                <div className="text-center">
                    <h2 className="text-xl sm:text-3xl font-bold mb-4">What We Do</h2>
                    <p className="text-sm sm:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                        We provide end-to-end custom software development, enterprise integrations, network infrastructure, and scalable digital solutions for organizations worldwide.
                    </p>
                    <div className="grid md:grid-cols-3 gap-8 mt-10">
                        <div className="p-6 bg-white shadow-md rounded-xl text-center hover:shadow-lg transition">
                            <FaCode className="text-4xl text-blue-600 mx-auto mb-4" />
                            <h3 className="text-lg sm:text-xl font-semibold mb-2">Custom Software</h3>
                            <p className="text-gray-600 text-sm sm:text-base">Robust, scalable and user-friendly applications tailored to your needs.</p>
                        </div>
                        <div className="p-6 bg-white shadow-md rounded-xl text-center hover:shadow-lg transition">
                            <FaCogs className="text-4xl text-green-600 mx-auto mb-4" />
                            <h3 className="text-lg sm:text-xl font-semibold mb-2">System Integration</h3>
                            <p className="text-gray-600 text-sm sm:text-base">Connect and streamline your business processes with efficient system links.</p>
                        </div>
                        <div className="p-6 bg-white shadow-md rounded-xl text-center hover:shadow-lg transition">
                            <MdOutlineSecurity className="text-4xl text-red-600 mx-auto mb-4" />
                            <h3 className="text-lg sm:text-xl font-semibold mb-2">Secure Infrastructure</h3>
                            <p className="text-gray-600 text-sm sm:text-base">Deploy and manage secure, enterprise-grade infrastructure solutions.</p>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="text-xl sm:text-3xl font-bold mb-4 text-center">Who We Serve</h2>
                    <div className="grid md:grid-cols-2 gap-8 mt-6">
                        <div className="flex items-start space-x-4">
                            <FaUsers className="text-3xl text-indigo-600 mt-1" />
                            <div>
                                <h4 className="text-lg sm:text-xl font-semibold mb-1">Government Agencies</h4>
                                <p className="text-gray-600 text-sm sm:text-base">We build transparent, scalable platforms for government service delivery.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <MdBusinessCenter className="text-3xl text-yellow-600 mt-1" />
                            <div>
                                <h4 className="text-lg sm:text-xl font-semibold mb-1">Enterprises</h4>
                                <p className="text-gray-600 text-sm sm:text-base">Optimize your business operations with tailored digital solutions.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <FaRocket className="text-3xl text-pink-500 mt-1" />
                            <div>
                                <h4 className="text-lg sm:text-xl font-semibold mb-1">Startups</h4>
                                <p className="text-gray-600 text-sm sm:text-base">Launch and scale rapidly with flexible, growth-oriented tech stacks.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <FaShieldAlt className="text-3xl text-gray-700 mt-1" />
                            <div>
                                <h4 className="text-lg sm:text-xl font-semibold mb-1">Telecom Providers</h4>
                                <p className="text-gray-600 text-sm sm:text-base">Manage infrastructure and customer data with powerful dashboards.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="text-xl sm:text-3xl font-bold mb-8 text-center">Projects We've Delivered</h2>
                    <div className="grid md:grid-cols-3 gap-10">
                        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
                            <h3 className="text-lg sm:text-xl font-semibold mb-2">SmartGov Portal</h3>
                            <p className="text-gray-600 text-base">
                                A digital transformation platform for licensing and citizen service automation.
                            </p>
                        </div>
                        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
                            <h3 className="text-lg sm:text-xl font-semibold mb-2">Telecom Network Dashboard</h3>
                            <p className="text-gray-600 text-base">
                                Real-time analytics and infrastructure visibility for telecom operations.
                            </p>
                        </div>
                        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
                            <h3 className="text-lg sm:text-xl font-semibold mb-2">Enterprise Billing System</h3>
                            <p className="text-gray-600 text-base">
                                Automated invoicing and billing platform for a logistics enterprise.
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="text-xl sm:text-3xl font-bold mb-4 text-center">Our Tech Stack</h2>
                    <p className="text-center text-gray-600 mb-6">We use cutting-edge technologies to build robust solutions:</p>
                    <div className="flex flex-wrap justify-center gap-4 text-lg font-medium text-gray-800">
                        <p className="bg-gray-100 px-4 py-2 rounded-full flex items-center gap-2">
                            <SiReact className="text-blue-500" /> <span className="text-sm sm:text-base">React</span>
                        </p>
                        <p className="bg-gray-100 px-4 py-2 rounded-full flex items-center gap-2">
                            <SiNextdotjs className="text-black" /> <span className="text-sm sm:text-base">Next.js</span>
                        </p>
                        <p className="bg-gray-100 px-4 py-2 rounded-full flex items-center gap-2">
                            <SiNodedotjs className="text-green-600" /> <span className="text-sm sm:text-base">Node.js</span>
                        </p>
                        <p className="bg-gray-100 px-4 py-2 rounded-full flex items-center gap-2">
                            <SiTailwindcss className="text-sky-400" /> <span className="text-sm sm:text-base">Tailwind CSS</span>
                        </p>
                        <p className="bg-gray-100 px-4 py-2 rounded-full flex items-center gap-2">
                            <SiMongodb className="text-green-500" /> <span className="text-sm sm:text-base">MongoDB</span>
                        </p>
                        <p className="bg-gray-100 px-4 py-2 rounded-full flex items-center gap-2">
                            <SiPostgresql className="text-blue-700" /> <span className="text-sm sm:text-base">PostgreSQL</span>
                        </p>
                        <p className="bg-gray-100 px-4 py-2 rounded-full flex items-center gap-2">
                            <FaAws  className="text-yellow-500" /> <span className="text-sm sm:text-base">AWS</span>
                        </p>
                        <p className="bg-gray-100 px-4 py-2 rounded-full flex items-center gap-2">
                            <SiDocker className="text-blue-600" /> <span className="text-sm sm:text-base">Docker</span>
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className="text-xl sm:text-3xl font-bold mb-4 text-center">Why Choose Us</h2>
                    <ul className="list-disc list-inside text-sm sm:text-base md:text-lg text-gray-700 space-y-2 max-w-3xl mx-auto">
                        <li>Proven experience in mission-critical software solutions</li>
                        <li>Rapid deployment with scalable, future-ready technologies</li>
                        <li>Trusted by governments, enterprises, and telecom providers</li>
                        <li>Customer-first approach backed by strong technical expertise</li>
                        <li>Committed to innovation, security, and long-term partnerships</li>
                    </ul>
                </div>

                <div className="text-center">
                    <h2 className="text-xl sm:text-3xl font-bold mb-4">Client Testimonials</h2>
                    <p className="text-gray-600 mb-6 text-sm sm:text-base">“Their team helped us scale our services in record time. Extremely reliable and responsive.”</p>
                    <p className="text-gray-800 font-semibold text-sm">— CTO, Leading Telecom Company</p>
                </div>
            </section>

            <section className="py-12 px-5 sm:px-14 lg:px-20">
                <CTA />
            </section>

            <Footer />
        </main>
    )
}

export default Portfolio
