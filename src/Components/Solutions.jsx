import {
  TrendingUpIcon,
  BarChart4Icon,
  LineChartIcon,
  PieChartIcon,
  UsersIcon,
  MailIcon,
  SearchIcon,
  MonitorIcon,
} from "lucide-react";
export default function Solutions() {
  return (
    <div
      id="Solutions"
      className="min-h-screen flex flex-col items-center justify-center p-10 md:p-32 gap-5"
    >
      <h1 className="text-4xl font-bold">Comprehensive Digital Solutions</h1>
      <p className="text-xl text-gray-500">
        Our integrated approach ensures your brand stands out in the digital
        landscape
      </p>
      <div className="lg:grid gap-5 lg:grid-cols-3 lg:grid-rows-4 flex flex-col">
        <div className="border border-purple-300 bg-purple-50 p-5 rounded-xl col-start-1 col-end-3 flex flex-col justify-center gap-2">
          <SearchIcon className="bg-purple-200 text-purple-700 p-2 rounded-lg w-10 h-10" />
          <h3 className="text-xl font-semibold text-purple-800">
            Search Engine Domination
          </h3>
          <p className="text-purple-500">
            Rank higher on Google and drive organic traffic with our advanced
            SEO techniques and keyword strategies.
          </p>
        </div>

        <div className="border border-blue-300 bg-blue-50 p-5 rounded-xl col-start-3 col-end-4 flex flex-col justify-center gap-2">
          <TrendingUpIcon className="bg-blue-200 text-blue-700 p-2 rounded-lg w-10 h-10" />
          <h3 className="text-xl font-semibold text-blue-800">
            Growth Marketing
          </h3>
          <p className="text-blue-500">
            Data-driven strategies to accelerate your business growth and
            increase your market share.
          </p>
        </div>

        <div className="border border-green-300 bg-green-50 p-5 rounded-xl col-start-1 col-end-2 row-start-2 row-span-2 flex flex-col justify-center gap-2">
          <UsersIcon className="bg-green-200 text-green-700 p-2 rounded-lg w-10 h-10" />
          <h3 className="text-xl font-semibold text-green-800">
            Social Media Presence
          </h3>
          <p className="text-green-500">
            Build meaningful connections with your audience through strategic
            social media management. Our team creates engaging content that
            resonates with your target demographic, manages community
            interactions, and develops campaigns that increase brand awareness
            and loyalty. We utilize data analytics to continuously optimize your
            social strategy for maximum impact.
          </p>
        </div>

        <div className="border border-yellow-300 bg-yellow-50 p-5 rounded-xl col-start-2 col-end-4 flex flex-col justify-center gap-2">
          <BarChart4Icon className="bg-yellow-200 text-yellow-700 p-2 rounded-lg w-10 h-10" />
          <h3 className="text-xl font-semibold text-yellow-800">
            PPC Campaigns
          </h3>
          <p className="text-yellow-500">
            Targeted advertising campaigns that deliver measurable ROI and
            immediate visibility.
          </p>
        </div>

        <div className="border border-red-300 bg-red-50 p-5 rounded-xl col-start-2 col-end-3 row-start-3 row-span-2 flex flex-col justify-center gap-2">
          <MailIcon className="bg-red-200 text-red-700 p-2 rounded-lg w-10 h-10" />
          <h3 className="text-xl font-semibold text-red-800">
            Email Marketing
          </h3>
          <p className="text-red-500">
            Personalized email campaigns that nurture leads and drive
            conversions.
          </p>
        </div>

        <div className="border border-purple-300 bg-purple-50 p-5 rounded-xl col-start-3 col-end-4 flex flex-col justify-center gap-2">
          <PieChartIcon className="bg-purple-200 text-purple-700 p-2 rounded-lg w-10 h-10" />
          <h3 className="text-xl font-semibold text-purple-800">
            Analytics & Insights
          </h3>
          <p className="text-purple-500">
            Comprehensive data analysis to inform strategic decisions and
            optimize performance.
          </p>
        </div>

        <div className="border border-orange-300 bg-orange-50 p-5 rounded-xl col-start-1 col-end-2 flex flex-col justify-center gap-2">
          <LineChartIcon className="bg-orange-200 text-orange-700 p-2 rounded-lg w-10 h-10" />
          <h3 className="text-xl font-semibold text-orange-800">
            Content Strategy
          </h3>
          <p className="text-orange-500">
            Engaging content that resonates with your audience and establishes
            your brand as an industry authority.
          </p>
        </div>

        <div className="border border-cyan-300 bg-cyan-50 p-5 rounded-xl col-start-3 col-end-4 flex flex-col justify-center gap-2">
          <MonitorIcon className="bg-cyan-200 text-cyan-700 p-2 rounded-lg w-10 h-10" />
          <h3 className="text-xl font-semibold text-cyan-800">
            Web Development
          </h3>
          <p className="text-cyan-500">
            Custom websites designed to convert visitors into customers with
            seamless user experiences.
          </p>
        </div>
      </div>
    </div>
  );
}
