import { ArrowRightIcon } from "lucide-react";
export default function Home() {
  return (
    <div
      id="Home"
      className="flex flex-col lg:flex-row p-10 min-h-screen items-center bg-gradient-to-r from-white to-purple-100"
    >
      <div className="flex flex-col space-y-5 p-5">
        <h1 className="text-7xl font-bold">
          Elevate Your Brand With{" "}
          <span className="text-purple-700">Digital Marketing</span> Excellence
        </h1>
        <p className="text-2xl text-gray-500">
          We help businesses grow their online presence with data-driven
          strategies and creative solutions that deliver measurable results.
        </p>
        <div className="md:space-x-5 flex flex-col md:flex-row lg:flex-row sm:gap-5">
          <button className="lg:w-40 md:w-1/2 w-full hover:shadow-xl bg-purple-700 border border-purple-700 text-white hover:bg-purple-800 rounded-xl py-3 flex justify-center">
            Get Started &nbsp;
            <ArrowRightIcon />{" "}
          </button>
          <button className="lg:w-40 md:w-1/2 w-full hover:shadow-xl border border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white rounded-xl py-3">
            Learn More
          </button>
        </div>
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt=""
          className="rounded-xl shadow-2xl"
        />
      </div>
    </div>
  );
}
