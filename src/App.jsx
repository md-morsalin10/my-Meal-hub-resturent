
import './App.css'
import AboutSection from './component/AboutSection/AboutSection'
import HeroSection from './component/Navbar/HeroSection/HeroSection'
import Navbar from './component/Navbar/Navbar'

function App() {

  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <HeroSection></HeroSection>
        <AboutSection></AboutSection>
      </main>
    </div>

  )
}

export default App
