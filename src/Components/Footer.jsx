import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
export default function Footer() {
  return (
    <div className="bg-gray-800 h-100">
      <div className="md:flex gap-16 p-10">
        <div className="flex flex-col gap-3 md:w-1/4">
          <h1 className="text-3xl font-bold text-white">
            <span className="text-purple-700">Pulse</span>Digital
          </h1>
          <p className="text-gray-200 text-lg">
            Empowering businesses with innovative digital marketing solutions to
            thrive in the digital landscape.
          </p>
          <div className="flex gap-3">
            <Facebook className="text-gray-200 hover:text-purple-400" />
            <Twitter className="text-gray-200 hover:text-purple-400" />
            <Instagram className="text-gray-200 hover:text-purple-400" />
            <Linkedin className="text-gray-200 hover:text-purple-400" />
          </div>
        </div>
        <div className="flex flex-col md:w-1/4">
          <h3 className="text-white font-bold text-xl py-3">Services</h3>
          <a href="/" className="text-lg text-gray-200 hover:text-purple-400">
            SEO Optimization
          </a>
          <a href="/" className="text-lg text-gray-200 hover:text-purple-400">
            Content Marketing
          </a>
          <a href="/" className="text-lg text-gray-200 hover:text-purple-400">
            Social Media Management
          </a>
          <a href="/" className="text-lg text-gray-200 hover:text-purple-400">
            PPC Advertising
          </a>
          <a href="/" className="text-lg text-gray-200 hover:text-purple-400">
            Email Marketing
          </a>
        </div>
        <div className="flex flex-col md:w-1/4">
          <h3 className="text-white font-bold text-xl py-3">Company</h3>
          <a href="/" className="text-lg text-gray-200 hover:text-purple-400">
            About Us
          </a>
          <a href="/" className="text-lg text-gray-200 hover:text-purple-400">
            Our Team
          </a>
          <a href="/" className="text-lg text-gray-200 hover:text-purple-400">
            Careers
          </a>
          <a href="/" className="text-lg text-gray-200 hover:text-purple-400">
            Privacy Policy
          </a>
          <a href="/" className="text-lg text-gray-200 hover:text-purple-400">
            Terms of Service
          </a>
        </div>
        <div className="flex flex-col md:w-1/4">
          <h3 className="text-white font-bold text-xl py-3">Contact</h3>
          <p className="text-lg text-gray-200">123 Marketing Street</p>
          <p className="text-lg text-gray-200">Digital City, DC 10101</p>
          <p className="text-lg text-gray-200">United States</p>
          <p className="text-lg text-gray-200">Email: info@pulsedigital.com</p>
          <p className="text-lg text-gray-200">Phone: (555) 123-4567</p>
        </div>
      </div>
      <hr className="w-11/12 justify-self-center" />
      <p className="text-gray-300 text-xl justify-self-center py-10">
        © 2025 Pulse Digital. All rights reserved.
      </p>
    </div>
  );
}
