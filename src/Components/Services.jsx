import {
  TrendingUpIcon,
  LineChartIcon,
  BarChartIcon,
  PieChartIcon,
  UsersIcon,
  MailIcon,
} from "lucide-react";

const services = [
  {
    title: "SEO Optimization",
    description:
      "Boost your website's visibility in search engines with our data-driven SEO strategies.",
    icon: TrendingUpIcon,
  },
  {
    title: "Content Marketing",
    description:
      "Engage your audience with compelling content that converts visitors into loyal customers.",
    icon: LineChartIcon,
  },
  {
    title: "Social Media Management",
    description:
      "Build a strong social presence with strategic campaigns that resonate with your audience.",
    icon: UsersIcon,
  },
  {
    title: "PPC Advertising",
    description:
      "Drive targeted traffic and maximize ROI with our expertly managed paid advertising campaigns.",
    icon: BarChartIcon,
  },
  {
    title: "Analytics & Reporting",
    description:
      "Gain valuable insights with comprehensive analytics and actionable reporting.",
    icon: PieChartIcon,
  },
  {
    title: "Email Marketing",
    description:
      "Nurture leads and drive conversions with personalized email marketing campaigns.",
    icon: MailIcon,
  },
];

export default function Services() {
  return (
    <div
      id="Services"
      className="min-h-screen flex flex-col justify-center items-center p-10 py-24 gap-5 bg-purple-50"
    >
      <h1 className="text-4xl font-bold">Our Digital Marketing Services</h1>
      <p className="text-xl text-gray-500 text-center max-w-3xl">
        We offer a comprehensive suite of services designed to help your
        business thrive in the digital landscape.
      </p>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
        {services.map((service, index) => {
          return (
            <div
              key={index}
              className="p-5 rounded-xl space-y-3 bg-white shadow-lg hover:shadow-xl group"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <service.icon />
              </div>
              <h3 className="text-2xl font-semibold">{service.title}</h3>
              <p className="text-xl text-gray-500">{service.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
