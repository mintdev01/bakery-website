import React from "react";

export default function Hero() {
  return (
    <div
      id="hero"
      className="relative h-[70vh] w-full flex items-center justify-center bg-center bg-cover"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Text content */}
      <div className="relative z-10 flex flex-col items-center text-white text-center px-4">
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold my-2">
          Welcome to our bakery
        </h1>
        <h3 className="text-base sm:text-xl lg:text-2xl font-medium my-2 max-w-[80%]">
          The freshest bread in town
        </h3>
        <a href="#products">
          <button className="mt-4 py-2 px-6 bg-primary-dark rounded-lg text-white hover:bg-primary transition font-semibold">
            See Menu
          </button>
        </a>
      </div>
    </div>
  );
}
