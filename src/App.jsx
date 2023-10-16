import About from "./components/About";
import Features from "./components/Features";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import NewsLetter from "./components/NewsLetter";
import Pricing from "./components/Pricing";
import Footer from "./shared/Footer";

export default function App() {
  return (
    <div className="">
      <NavBar/>
      <Home/>
      <Features/>
      <About/>
      <Pricing/>
      <NewsLetter/>
      <Footer/>
    </div>
  )
}