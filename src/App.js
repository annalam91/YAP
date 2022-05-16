import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <h1 className="bg-blue-300">
      <Navbar />
      <Home />
      <About />
    </h1>
  );
}

export default App;
