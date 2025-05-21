import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Email is invalid";
    if (!form.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null });
      setSubmitStatus(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLoading) return;
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitStatus(null);
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setSubmitStatus("success");
        setForm({ name: "", email: "", message: "" });
      }, 2000);
    } else {
      setSubmitStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-md mx-auto">
      <div className="flex flex-col">
        <label className="block text-sm font-medium text-dark">Name</label>
        <input
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          className={`w-full mt-1 border rounded px-3 py-2 ${
            errors.name ? "border-red-500" : "border-gray-300"
          }`}
          disabled={isLoading}
        />
        {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
      </div>

      <div className="flex flex-col">
        <label className="block text-sm font-medium text-dark">Email</label>
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          className={`w-full mt-1 border rounded px-3 py-2 ${
            errors.email ? "border-red-500" : "border-gray-300"
          }`}
          disabled={isLoading}
        />
        {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
      </div>

      <div className="flex flex-col">
        <label className="block text-sm font-medium text-dark">Message</label>
        <textarea
          name="message"
          rows="4"
          value={form.message}
          onChange={handleChange}
          className={`w-full mt-1 border rounded px-3 py-2 ${
            errors.message ? "border-red-500" : "border-gray-300"
          }`}
          disabled={isLoading}
        />
        {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
      </div>

      {submitStatus === "error" && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative animate-pulse" role="alert">
          <strong className="font-bold">Error: </strong>
          <span>Please fix the errors above before submitting.</span>
        </div>
      )}

      {submitStatus === "success" && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative animate-pulse" role="alert">
          <strong className="font-bold">Success! </strong>
          <span>Your message has been sent successfully.</span>
        </div>
      )}

      <button
        type="submit"
        className={`px-4 py-2 rounded text-white transition ${
          isLoading ? "bg-gray-500 cursor-not-allowed" : "bg-primary hover:bg-secondary"
        }`}
        disabled={isLoading}
      >
        {isLoading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
