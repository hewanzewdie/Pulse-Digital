import { MailIcon, PhoneIcon, MapPin } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
          toast.success("Message sent successfully.");
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          console.error("Failed to send email:", error);
          toast.error("Failed to send message.");
        }
      );
  };

  return (
    <div
      id="Contact"
      className="lg:flex items-center justify-center min-h-screen p-10 md:px-20 gap-10"
    >
      <div className="flex flex-col gap-5 lg:w-1/2">
        <h1 className="text-4xl font-bold">Get In Touch</h1>
        <p className="text-2xl text-gray-500">
          Have questions about our services or ready to start your next project?
          Contact us today and one of our digital marketing experts will get
          back to you.
        </p>

        <div className="flex items-center gap-3">
          <MailIcon className="w-10 h-10 p-2 bg-purple-200 text-purple-700 rounded-lg" />
          <div className="flex flex-col">
            <p className="text-lg font-semibold">Email Us</p>
            <a
              href="mailto:info@pulsedigital.com"
              className="text-gray-500 hover:text-purple-800 hover:font-semibold"
            >
              info@pulsedigital.com
            </a>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <PhoneIcon className="w-10 h-10 p-2 bg-purple-200 text-purple-700 rounded-lg" />
          <div className="flex flex-col">
            <p className="text-lg font-semibold">Call Us</p>
            <a
              href="tel:(555) 123-4567"
              className="text-gray-500 hover:text-purple-800 hover:font-semibold"
            >
              (555) 123-4567
            </a>
          </div>
        </div>

        <div className="flex gap-3">
          <MapPin className="w-10 h-10 p-2 bg-purple-200 text-purple-700 rounded-lg" />
          <div className="flex flex-col">
            <p className="text-lg font-semibold">Visit Us</p>
            <p className="text-gray-500">
              123 Marketing Street
              <br />
              Digital City, DC 10101
              <br />
              United States
            </p>
          </div>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 lg:w-1/2 mt-10 shadow-xl p-10 rounded-xl"
      >
        <h3 className="text-2xl font-semibold">Send Us a Message</h3>

        <label htmlFor="name" className="text-xl text-gray-800">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 p-3"
          placeholder="John Doe"
          required
        />

        <label htmlFor="email" className="text-xl text-gray-800">
          Your Email
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 p-3"
          placeholder="john@example.com"
          required
        />

        <label htmlFor="subject" className="text-xl text-gray-800">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          value={formData.subject}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 p-3"
          placeholder="How can we help you?"
          required
        />
        <label htmlFor="message" className="text-xl text-gray-800">
          Your Message
        </label>
        <textarea
          id="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 p-3"
          placeholder="Write your message here"
          required
        ></textarea>

        <button
          type="submit"
          className="bg-purple-600 text-xl font-semibold text-white w-full self-center p-3 rounded-xl hover:shadow-xl hover:bg-purple-700"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
