
import { Suspense } from 'react'
import './App.css'
import AboutSection from './component/AboutSection/AboutSection'
import Category from './component/Category/Category'
import CategoryCard from './component/CategoryCard/CategoryCard'
import HeroSection from './component/Navbar/HeroSection/HeroSection'
import Navbar from './component/Navbar/Navbar'

const chineseFoodPromise = fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Chinese')
.then(res=> res.json())

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
        
        <Suspense fallback={<p>Loading...</p>}>
           <CategoryCard chineseFoodPromise={chineseFoodPromise}></CategoryCard>
        </Suspense>
      </main>
    </div>

  )
}

export default App
