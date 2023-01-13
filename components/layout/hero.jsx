import { FaArrowRight } from "react-icons/fa";

export default function Hero({heading, message}) {
  return (
    <header className="flex items-center h-screen mb-10 bg-fixed bg-center bg-cover bg-[url('../public/sommer03.jpg')]">
      {/* Overlay */}
      <div className="absolute top-0 w-[100%] h-screen bg-black/40 z-[2]" />
      <div className="text-white z-[2] mt-[-5rem] mx-5 lg:mx-auto max-w-4xl">
        <h2 className="text-5xl font-bold antialiased">{heading}</h2>
        <p className="py-5 text-xl antialiased">{message}</p>
        <button className="px-6 hover:cursor-square py-2 border antialiased hover:bg-white hover:text-black ease-linear duration-150">CTA</button>
      </div>
    </header>
  );
}
