import React from "react";

export default function Footer() {
  return (
    <footer className="border-2 h-auto py-6 px-4 text-sm bg-primary-dark flex flex-col gap-4 items-center sm:flex-row sm:justify-between sm:h-[25vh]">
      <div className="border-2 p-2 rounded-lg text-center">BreadCo © 2025</div>
      <div className="border-2 p-2 flex flex-col gap-2 rounded-lg sm:flex-row sm:gap-4">
        <a href="#hero">Home</a>
        <a href="#products">Menu</a>
        <a href="#about">About</a>
      </div>
      <div className="border-2 p-2 rounded-lg text-center">
        hello@breadco.fake
      </div>
    </footer>
  );
}
