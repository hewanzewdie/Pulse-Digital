import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "Marketing Director",
      company: "TechNova Inc.",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      content:
        "Pulse Digital transformed our online presence completely. Their SEO strategies increased our organic traffic by 156% in just six months, and their content marketing approach has established us as thought leaders in our industry.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      position: "CEO",
      company: "Startup Ventures",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      content:
        "As a startup, we needed a partner who understood our limited budget but ambitious goals. The team at Pulse Digital delivered beyond our expectations, helping us achieve a 200% growth in lead generation within our first year.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      position: "E-commerce Manager",
      company: "Fashion Forward",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      content:
        "Our online sales have increased by 78% since we started working with Pulse Digital. Their PPC campaigns and social media strategies have been game-changers for our brand's visibility and customer engagement.",
      rating: 4,
    },
    {
      name: "David Thompson",
      position: "Operations Director",
      company: "Global Solutions",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      content:
        "The analytics and reporting provided by Pulse Digital have given us invaluable insights into our customer behavior. This data-driven approach has allowed us to make strategic decisions that have significantly improved our ROI.",
      rating: 5,
    },
    {
      name: "Lisa Wang",
      position: "Small Business Owner",
      company: "Artisan Crafts",
      image: "https://randomuser.me/api/portraits/women/75.jpg",
      content:
        "I was skeptical about digital marketing for my small craft business, but Pulse Digital created a strategy that perfectly suited my niche market. My workshop bookings are now full months in advance!",
      rating: 5,
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setActiveIndex((prev) =>
      prev < testimonials.length - 1 ? prev + 1 : prev
    );
  };

  const current = testimonials[activeIndex];

  return (
    <div
      id="Testimonials"
      className="min-h-screen bg-purple-50 flex-center flex-col p-10 gap-5 px-4 md:px-20"
    >
      <h1 className="text-4xl font-bold text-center">What Our Clients Say</h1>
      <p className="text-xl text-gray-500 text-center max-w-2xl">
        Don't just take our word for it — hear from some of our satisfied
        clients
      </p>
      <div className="flex items-center mt-10">
        <button onClick={handlePrev} disabled={activeIndex === 0}>
          <ChevronLeft
            className={`w-10 h-10 mx-2 bg-white border rounded-full shadow-xl hover:bg-gray-100 ${
              activeIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          />
        </button>

        <div className="flex flex-col shadow-lg rounded-2xl p-8 md:p-10 gap-6 bg-white  transition-all duration-300">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={
                  i < current.rating ? "text-yellow-400" : "text-gray-300"
                }
                fill={i < current.rating ? "yellow" : "none"}
              />
            ))}
          </div>
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
            "{current.content}"
          </p>
          <div className="flex items-center gap-5">
            <img
              src={current.image}
              alt={current.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <p className="text-lg font-semibold text-gray-900">
                {current.name}
              </p>
              <p className="text-gray-500">
                {current.position}, {current.company}
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={handleNext}
          disabled={activeIndex === testimonials.length - 1}
        >
          <ChevronRight
            className={`w-10 h-10 mx-2 bg-white border rounded-full shadow-xl hover:bg-gray-100 ${
              activeIndex === testimonials.length - 1
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
          />
        </button>
      </div>

      <div className="flex space-x-2 mt-6">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`w-3 h-3 rounded-full ${
              activeIndex === i ? "bg-purple-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
