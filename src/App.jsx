import Hero from './components/Hero'
import Details from './components/Details'
import About from './components/About'
import Interests from './components/Interests'
import Footer from './components/Footer'
import './App.css'
import React, {useState} from "react";
import DarkModeToggle from "react-dark-mode-toggle";


function App() {
  const [darkMode, setDarkMode] = useState(false);

  React.useEffect(() => {
    if (darkMode) {
      document.querySelector('main').classList.add("dark");
      document.querySelector('footer').classList.add("dark");
      document.querySelector('.website-link').classList.add("font-white");
      document.querySelector('h1').classList.add("font-white");
      document.querySelectorAll('.about').forEach(el => el.classList.add("font-white"));

    } else {
      document.querySelector('main').classList.remove("dark");
      document.querySelector('footer').classList.remove("dark");
      document.querySelector('h1').classList.remove("font-white");
      document.querySelector('.website-link').classList.remove("font-white");
      document.querySelectorAll('.about').forEach(el => el.classList.remove("font-white"));
    }
  }, [darkMode]);


  return (
    <div className="App">
      <DarkModeToggle
      onChange={()=> setDarkMode(!darkMode)}
      checked={darkMode}
      size={80}
    />
      <div className="container">
        <main className="main">

          <Hero />
          <Details />
          <About />
          <Interests />
          <Footer />
        </main>
      </div>
    </div>
  )
}

export default App
