import "./App.css";
import Contact from "./components/Contact/Contact"
import Home from "./components/home/Home";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import { useState } from "react";
import Menu from "./components/Menu/Menu";

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="App">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Home />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
