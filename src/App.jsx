
import { Suspense, useState } from 'react'
import './App.css'
import AboutSection from './component/AboutSection/AboutSection'
import Category from './component/Category/Category'
import CategoryCard from './component/CategoryCard/CategoryCard'
import HeroSection from './component/Navbar/HeroSection/HeroSection'
import Navbar from './component/Navbar/Navbar'
import CanadianFood from './component/CanadianFood/CanadianFood'

const chineseFoodPromise = fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Chinese')
  .then(res => res.json())

const canadianFoodPromise = fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian')
  .then(res => res.json())

function App() {

  const [activeCategory, setActiveCategory] = useState(null)

  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <HeroSection></HeroSection>
        <AboutSection></AboutSection>
        <Category activeCategory={activeCategory} setActiveCategory={setActiveCategory}></Category>

        {activeCategory === 'Chinese' && (
          <Suspense fallback={<p>Loading...</p>}>
            <CategoryCard chineseFoodPromise={chineseFoodPromise}></CategoryCard>
          </Suspense>
        )}
        {activeCategory === 'Canadian' && (
          <Suspense fallback={<h>Loading...</h>}>
            <CanadianFood canadianFoodPromise={canadianFoodPromise}></CanadianFood>
          </Suspense>
        )}
      </main>
    </div>

  )
}

export default App
