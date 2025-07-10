export default function About() {
  const aboutData = [
    {
      id: 1,
      title: "Data-Driven Strategies",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description:
        "We don't rely on guesswork. Our marketing strategies are built on comprehensive data analysis and market research to ensure maximum ROI for your business.",
    },
    {
      id: 2,
      title: "Creative Excellence",
      image:
        "https://images.unsplash.com/photo-1558403194-611308249627?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description:
        "Our team of creative professionals crafts compelling visuals and content that captivate your audience and strengthen your brand identity in the digital space.",
    },
    {
      id: 3,
      title: "Results-Focused Approach",
      image:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description:
        "We measure success by the results we deliver. Our transparent reporting and analytics keep you informed about the impact of our strategies on your business growth.",
    },
  ];
  return (
    <div id="About" className="min-h-screen py-32 px-10 space-y-16">
      <div className="flex-center flex-col mb-12">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Your Partner in Digital Success
        </h2>
        <p className="text-xl text-gray-600 text-center">
          Learn about our core pillars that guide us in crafting effective
          digital marketing strategies designed for measurable impact and
          sustainable growth.
        </p>
      </div>
      {aboutData.map((about, index) => (
        <div
          key={about.id}
          className={`md:flex items-center gap-10 ${
            index % 2 !== 0 ? "flex-row-reverse" : ""
          }`}
        >
          <img
            src={about.image}
            alt={about.title}
            className="md:w-1/2 rounded-xl shadow-xl"
          />
          <div className="md:w-1/2 space-y-5">
            <h3 className="text-3xl font-bold pt-5">{about.title}</h3>
            <p className="text-lg text-gray-600">{about.description}</p>
            <button className="bg-purple-700 p-3 text-white rounded-xl hover:bg-purple-800">
              Learn More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
