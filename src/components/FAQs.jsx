import { useState } from "react";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We provide software development, consulting, and IT support tailored to your business needs.",
  },
  {
    question: "How can I get a quote?",
    answer:
      "You can contact us through the contact form or email us directly to discuss your project requirements.",
  },
  {
    question: "What is your project turnaround time?",
    answer:
      "Turnaround depends on the project size and complexity; typically, we deliver within 4 to 8 weeks.",
  },
  {
    question: "Do you offer post-launch support?",
    answer:
      "Yes, we offer maintenance and support packages to ensure your software runs smoothly after launch.",
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-10 px-5 sm:px-14 lg:px-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-300 hover:bg-gray-100 rounded-lg overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center p-4 focus:outline-none"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-medium text-sm sm:text-lg text-left">{faq.question}</span>
                <svg
                  className={`w-6 h-6 text-primary transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"></path>
                </svg>
              </button>
              <div
                id={`faq-answer-${index}`}
                className={`px-4 pt-0 pb-4 text-gray-700 bg-white transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                }`}
                style={{ overflow: "hidden" }}
              >
                <p className="text-xs sm:text-sm">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
