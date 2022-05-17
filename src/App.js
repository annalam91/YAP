import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Work from "./components/Work";

function App() {
  return (
    <h1 className="bg-blue-300">
      <Navbar />
      <Home />
      <About />
      <Work />
      <Contact />
    </h1>
  );
}

export default App;
