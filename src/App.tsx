import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import About from "../components/About";
export default function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-background">
        <Header></Header>
        <div className="h-[10vh]"></div>
        <Hero></Hero>
        <div className="h-[10vh]"></div>
        <Menu></Menu>
        <div className="h-[10vh]"></div>
        <About></About>
        <div className="h-[10vh]"></div>
        <Footer></Footer>
      </div>
    </>
  );
}
