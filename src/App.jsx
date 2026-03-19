
import './App.css'
import AboutSection from './component/AboutSection/AboutSection'
import Category from './component/Category/Category'
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
        <Category></Category>
      </main>
    </div>

  )
}

export default App
