import React, { useState } from 'react'
import "./slider.css"
import FirstBook from "../../images/book1.png"
import SecondBook from "../../images/book2.png"
import ThirdBook from "../../images/book3.png"

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if(direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  }
  return (
    <div className='slider-container'>
      <i onClick={() => handleClick("left")} className="bi bi-chevron-double-left arrow-left"></i>
      {/* {slideIndex !== 0 && <i onClick={() => handleClick("left")} className="bi bi-chevron-double-left arrow-left"></i>} هاي معناها اذا السلايدإندكس ما كان يساوي صفر إظهرلي الآيكون ليفت */}
      <div style={{ transform: `translateX(${slideIndex * -100}vw)` }} className="slider-wrapper">
      {/* translateX اذا كان الرقم صفر بطلعلي الصورة اللي في السلايد الاول واذا كان السلايدإندكس يساوي 1 حيتحرك -100 وبالتالي بظهرلي الصورة اللي في السلايد الثاني وهكذا . . . علماً إنو عرض الصورة كاملة على الشاشة هو 100vw */}
        <div className="slide first-slide">
          <div className="slide-img-wrapper">
            <img src={FirstBook} alt=""/>
          </div>
          <div className="slide-info-wrapper">
            <h1 className="slide-info-title">Book Store</h1>
            <p className="slide-info-desc">
              It's not just reading. it's living the adventure.
            </p>
          </div>
        </div>

        <div className="slide second-slide">
          <div className="slide-img-wrapper">
            <img src={SecondBook} alt=""/>
          </div>
          <div className="slide-info-wrapper">
            <h1 className="slide-info-title">The Books for Everyone</h1>
            <p className="slide-info-desc">
              You can read at home or at the bookstore.
            </p>
          </div>
        </div>

        <div className="slide third-slide">
          <div className="slide-img-wrapper">
            <img src={ThirdBook} alt=""/>
          </div>
          <div className="slide-info-wrapper">
            <h1 className="slide-info-title">Check Out The New Titles</h1>
            <p className="slide-info-desc">
              We send you the book you want at home.
            </p>
          </div>
        </div>

      </div>
      <i onClick={() => handleClick("right")} className="bi bi-chevron-double-right arrow-right"></i>
      {/* {slideIndex !== 2 && <i onClick={() => handleClick("right")} className="bi bi-chevron-double-right arrow-right"></i>} هاي معناها اذا كان السلايدإندكس لا يساوي 2 إظهرلي الآيكون  */}
    </div>
  )
}
export default Slider;
