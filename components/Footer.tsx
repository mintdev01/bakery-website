export default function Footer() {
  return (
    <>
      <footer className="border-2 h-[15vh] flex justify-between items-center px-4 text-sm">
        <div className="border-2 p-2">BreadCo © 2025</div>
        <div className="border-2 p-2 flex gap-4">
          <a href="#hero">Home</a>
          <a href="#products">Menu</a>
          <a href="#about">About</a>
        </div>
        <div className="border-2 p-2">hello@breadco.fake</div>
      </footer>
    </>
  );
}
