import React, { useRef, useEffect, useState } from "react";
import Title from "../components/Title";
import ContactExperience from "../components/heroModels/ContactExperience";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);
  const [formHeight, setFormHeight] = useState(null);

  useEffect(() => {
    if (formRef.current) {
      setFormHeight(formRef.current.offsetHeight);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error("Ahh, something went wrong. Please try again.");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <Title title="Let's Connect" sub="📬 Get in Touch" />
        <div className="grid grid-cols-1 xl:grid-cols-12 mt-16 gap-10">
          {/* Left: Contact Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="col-span-1 xl:col-span-5 rounded-xl p-5 md:p-10 flex flex-col gap-7"
          >
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
            />
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={6}
              placeholder="Type your message..."
              required
              value={formData.message}
              onChange={handleChange}
            />
            <button type="submit" disabled={loading}>
              <div className="cta-button group">
                <div className="bg-circle" />
                <p className="text">
                  {loading ? "Sending..." : "Send Message"}
                </p>
                <div className="arrow-wrapper">
                  <img src="/images/arrow-down.svg" alt="arrow" />
                </div>
              </div>
            </button>
          </form>
          {/* Right: 3D Experience */}
          <div className="col-span-1 xl:col-span-7 flex items-center justify-center xl:mt-0 mt-0">
            <div
              className={`
                w-full
                ${formHeight ? "hidden xl:block" : ""}
                h-full bg-[#cd7c2e] hover:cursor-grab rounded-lg
              `}
              style={formHeight ? { height: formHeight } : {}}
            >
              {/* Show this only on xl and above */}
              <ContactExperience />
            </div>
            <div
              className={`
                w-full aspect-w-1 aspect-h-1
                ${formHeight ? "xl:hidden" : ""}
                bg-[#cd7c2e] hover:cursor-grab rounded-lg
                flex items-center justify-center
                max-w-[400px] mx-auto
              `}
            >
              {/* Show this only below xl */}
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
