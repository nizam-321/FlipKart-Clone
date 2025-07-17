import React from 'react'
import CategoryMenu from './components/category-menu'
import BannerSlider from './components/bannerslider'
import BestofElectronics from './components/bestOfElectronics'
import FoodsToyes from './components/foods&toys'
import SportsHealth from './components/sports&health'
import DealsSection from './components/dealsSection'


const Home = () => {
  return (
    <>
      <div>

        <CategoryMenu />
        <BannerSlider />
        <BestofElectronics />
        <FoodsToyes />
        <SportsHealth />
        <DealsSection />
        <SportsHealth />
        <FoodsToyes />

      </div>

    </>
  )
}
export default Home





