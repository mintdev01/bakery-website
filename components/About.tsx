export default function About() {
  return (
    <>
      <div
        className="border-2 h-[35vh] flex justify-center items-center px-4"
        id="about"
      >
        <div className="border-2 h-[50%] aspect-square flex justify-center items-center">
          Logo
        </div>
        <div className="border-2 h-[60%] w-[50%] ml-8 flex flex-col justify-center">
          <h2 className="text-lg font-semibold mb-2">About Us</h2>
          <p className="text-sm">text</p>
        </div>
      </div>
    </>
  );
}
