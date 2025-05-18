export default function Hero() {
  return (
    <>
      <div
        id="hero"
        className="relative h-[70vh] w-full flex items-center justify-center bg-center bg-cover"
        style={{ backgroundImage: "url('/background.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Text content */}
        <div className="relative z-10 flex flex-col items-center text-white text-center">
          <h1 className="text-3xl font-semibold my-2">Welcome to our bakery</h1>
          <h3 className="text-xl font-medium my-2">
            the freshest bread in town
          </h3>
          <button className="border-2 py-2 px-6 my-2">See Menu</button>
        </div>
      </div>
    </>
  );
}
