import React from 'react'
import BookSlider from '../../book-slider/BookSlider'
import HeadingTilte from '../../heading-title/HeadingTilte'
import Services from '../../services/Services'
import Slider from '../../slider/Slider'
import { books } from "../../../data/books"

const HomePage = () => {
  return (
    <div className="home">
      <Slider />
      <Services />
      <HeadingTilte title="Most gifted"/>
      <BookSlider data={books}/> 
      {/* data={books} البوكس هي أرراي فيها كل الداتا, أرسلتها لكومبوننت البوكسلايدر ك بروبس */}
      <HeadingTilte title="Best Seller"/>
      <BookSlider data={books}/> 
      <HeadingTilte title="Most wished for"/>
      <BookSlider data={books}/> 
    </div>
  )
}
export default HomePage
