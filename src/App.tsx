export default function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <header className="border-2 h-[15vh] justify-between items-center flex px-10">
          <div>logo</div>
          <nav className="border-2 h-full flex justify-center items-center gap-4 px-4">
            <a href="#hero">Home</a>
            <a href="#products">Menu</a>
            <a href="#about">About us</a>
          </nav>
        </header>
        <main className="flex-grow">
          <div className="h-[10vh]"></div>
          <div
            className="h-[50vh] flex flex-col justify-center items-center border-2"
            id="hero"
          >
            <h1 className="text-3xl font-semibold my-2">
              Welcome to our bakery
            </h1>
            <h3 className="text-xl font-medium my-2">
              the freshest bread in town
            </h3>
            <button className="border-2 py-2 px-6 my-2">See Menu</button>
          </div>
          <div className="h-[10vh]"></div>
          <div
            className="border-2 h-[50vh] flex justify-center items-center flex-col px-2 py-2"
            id="products"
          >
            <div className="h-[12%] border-2 w-full mb-2 flex justify-center items-center">
              <h1 className="text-xl font-semibold">Menu</h1>
            </div>
            <div className="h-[85%] w-full border-2 flex justify-around items-center flex-wrap">
              <div className="h-[90%] w-[32%] border-2">card1</div>
              <div className="h-[90%] w-[32%] border-2">card2</div>
              <div className="h-[90%] w-[32%] border-2">card3</div>
            </div>
          </div>
          <div className="h-[10vh]"></div>
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
          <div className="h-[10vh]"></div>
        </main>
        <footer className="border-2 h-[15vh] flex justify-between items-center px-4 text-sm">
          <div className="border-2 p-2">BreadCo © 2025</div>
          <div className="border-2 p-2 flex gap-4">
            <a href="#hero">Home</a>
            <a href="#products">Menu</a>
            <a href="#about">About</a>
          </div>
          <div className="border-2 p-2">hello@breadco.fake</div>
        </footer>
      </div>
    </>
  );
}
