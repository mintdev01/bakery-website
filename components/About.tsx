import React from "react";

export default function About() {
  return (
    <div
      className="flex flex-col items-center gap-6 px-4 py-6 bg-primary sm:flex sm:flex-row sm:justify-center sm:gap-12 sm:h-[35vh]"
      id="about"
    >
      <div className="h-20 flex justify-center items-center border-2 rounded-md sm:h-[100%] sm:aspect-square overflow-hidden">
        <img
          src="bakerylogo.png"
          alt="BreadCo Logo"
          className="max-h-full max-w-full object-cover"
        />
      </div>

      <div className="border-2 flex flex-col justify-center text-center sm:text-left sm:h-[95%] sm:pt-2 sm:p-1 sm:w-[60%]">
        <h2 className="text-base font-semibold mb-2 px-2">
          At BreadCo, we craft fresh, handmade treats with love and tradition.{" "}
          <br />
          Every bite brings you closer to home.
        </h2>
      </div>
    </div>
  );
}
