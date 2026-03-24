
import { Suspense, useState } from 'react'
import './App.css'
import AboutSection from './component/AboutSection/AboutSection'
import Category from './component/Category/Category'
import CategoryCard from './component/CategoryCard/CategoryCard'
import HeroSection from './component/Navbar/HeroSection/HeroSection'
import Navbar from './component/Navbar/Navbar'
import CanadianFood from './component/CanadianFood/CanadianFood'
import AmericanFood from './component/AmericanFood/AmericanFood'
import ItalianFood from './component/ItalianFood/ItalianFood'
import OurServices from './component/OurServices/OurServices'
import BestSelling from './component/BestSelling/BestSelling'

const chineseFoodPromise = () => fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Chinese')
  .then(res => res.json())

const canadianFoodPromise = () => fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian')
  .then(res => res.json())

const americanFoodPromise=() => fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=American')
  .then(res => res.json())

const italianFoodPromise=() => fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Italian')
  .then(res => res.json())

const bestSellingPromise = fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
.then(res=> res.json())

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
          <Suspense fallback={<div className='flex justify-center items-center w-full py-5'>
            <span className="loading loading-bars loading-xl text-primary"></span>
          </div>}>
            <CategoryCard chineseFoodPromise={chineseFoodPromise()}></CategoryCard>
          </Suspense>
        )}
        {activeCategory === 'Canadian' && (
          <Suspense fallback={<div className='flex justify-center items-center w-full py-5'>
            <span className="loading loading-bars loading-xl text-primary"></span>
          </div>}>
            <CanadianFood canadianFoodPromise={canadianFoodPromise()}></CanadianFood>
          </Suspense>
        )}

        {activeCategory === 'American' && (
          <Suspense fallback={<div className='flex justify-center items-center w-full py-5'>
            <span className="loading loading-bars loading-xl text-primary"></span>
          </div>}>
            <AmericanFood americanFoodPromise={americanFoodPromise()}></AmericanFood>
          </Suspense>
        )}

        {activeCategory === 'Italian' && (
          <Suspense fallback={<div className='flex justify-center items-center w-full py-5'>
            <span className="loading loading-bars loading-xl text-primary"></span>
          </div>}>
            <ItalianFood italianFoodPromise={italianFoodPromise()}></ItalianFood>
          </Suspense>
        )}

        <OurServices></OurServices>

        <Suspense fallback={ <div className='flex justify-center items-center w-full py-5'>
          <span className="loading loading-bars loading-xl text-primary"></span>
        </div>}>
          <BestSelling bestSellingPromise={bestSellingPromise}></BestSelling>
        </Suspense>
      </main>
    </div>

  )
}

export default App
