import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs
      .sendForm(serviceID, templateID, form.current, publicKey)
      .then(() => {
        setStatus("success");
        form.current.reset();
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        setStatus("error");
      });
  };

  return (
    <section
      className="py-16 px-6 sm:px-10 md:px-20 lg:px-32 bg-brand-background flex flex-col items-center"
      data-aos="zoom-in"
      data-aos-delay="300"
    >
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-center text-brand-secondary mb-8">
        Contact Me
      </h2>
      <p className="text-center text-brand-secondaryHover max-w-2xl mb-12 text-sm sm:text-base">
        Have a project in mind or just want to say hi? Drop a message below 👇
      </p>

      {/* Form */}
      <form
        ref={form}
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-brand-backgroundEnd/80 backdrop-blur-xl border border-white/10
                   p-6 sm:p-10 rounded-2xl shadow-2xl space-y-8"
      >
        {/* Name */}
        <div className="relative">
          <input
            name="from_name"
            required
            placeholder=" "
            className="peer w-full px-4 py-3 rounded-xl bg-brand-background/30 border border-brand-backgroundStart
                       text-brand-secondary placeholder-transparent
                       focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary
                       transition-all outline-none"
          />
          <label
            className="absolute left-4 top-3 text-brand-secondaryHover text-sm sm:text-base
                       peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                       peer-focus:top-1 peer-focus:text-xs peer-focus:text-brand-secondary
                       peer-valid:top-1 peer-valid:text-xs peer-valid:text-brand-secondary
                       transition-all"
          >
            Your Name
          </label>
        </div>

        {/* Email */}
        <div className="relative">
          <input
            name="reply_to"
            type="email"
            required
            placeholder=" "
            className="peer w-full px-4 py-3 rounded-xl bg-brand-background/30 border border-brand-backgroundStart
                       text-brand-secondary placeholder-transparent
                       focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary
                       transition-all outline-none"
          />
          <label
            className="absolute left-4 top-3 text-brand-secondaryHover text-sm sm:text-base
                       peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                       peer-focus:top-1 peer-focus:text-xs peer-focus:text-brand-secondary
                       peer-valid:top-1 peer-valid:text-xs peer-valid:text-brand-secondary
                       transition-all"
          >
            Your Email
          </label>
        </div>

        {/* Message */}
        <div className="relative">
          <textarea
            name="message"
            required
            placeholder=" "
            rows="5"
            className="peer w-full px-4 py-3 rounded-xl bg-brand-background/30 border border-brand-backgroundStart
                       text-brand-secondary placeholder-transparent
                       focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary
                       transition-all outline-none resize-none"
          />
          <label
            className="absolute left-4 top-3 text-brand-secondaryHover text-sm sm:text-base
                       peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                       peer-focus:top-1 peer-focus:text-xs peer-focus:text-brand-secondary
                       peer-valid:top-1 peer-valid:text-xs peer-valid:text-brand-secondary
                       transition-all"
          >
            Your Message
          </label>
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full py-3 sm:py-4 rounded-xl bg-gradient-to-r from-brand-secondary to-brand-secondaryHover
                     text-white font-semibold tracking-wide shadow-md
                     hover:scale-[1.02] hover:shadow-xl active:scale-[0.98]
                     transition-all duration-300 disabled:opacity-50 text-sm sm:text-base"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>

        {/* Status Messages */}
        {status === "success" && (
          <p className="text-brand-secondary text-center mt-2 font-bold text-sm sm:text-base">
            ✅ Message sent — thanks!
          </p>
        )}
        {status === "error" && (
          <p className="text-red-500 text-center mt-2 text-sm sm:text-base">
            ❌ Something went wrong. Try again later.
          </p>
        )}
      </form>
    </section>
  );
};

export default ContactForm;
