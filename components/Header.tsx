export default function Header() {
  return (
    <>
      <header className="border-2 h-[15vh] justify-between items-center flex px-10 bg-primary">
        <div className=" aspect-square h-15 flex justify-center items-center rounded-4xl overflow-hidden">
          <img src="bakerylogo.png" alt="logo" />
        </div>
        <nav className=" h-full flex justify-center items-center gap-4 px-4">
          <a href="#hero">Home</a>
          <a href="#products">Menu</a>
          <a href="#about">About us</a>
        </nav>
      </header>
    </>
  );
}
