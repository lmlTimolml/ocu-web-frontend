import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

export default function Hero({image, heading, message}) {
  return (
    <header className="flex items-center h-screen relative">
      {/* Overlay */}
      <Image style={{objectFit:"cover"}} fill priority src="/images/sommer03.jpg" alt={heading} />
      <div className="absolute top-0 w-full h-screen bg-black/40 z-[2]" />
      <div className="text-white z-[2] mt-[-5rem] mx-5 lg:mx-auto max-w-4xl">
        <h2 className="text-5xl font-bold antialiased">{heading}</h2>
        <p className="py-5 text-xl antialiased">{message}</p>
        <button className="px-6 hover:cursor-square py-2 border antialiased hover:bg-white hover:text-black ease-linear duration-150">CTA</button>
      </div>
    </header>
  );
}
