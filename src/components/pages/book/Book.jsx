import React, { useContext, useState } from 'react'
import "./book.css"
import { useParams } from 'react-router-dom'
// useParams من خلالو بقدر أحصل على البراميتر من اليو آر إل
import { books } from '../../../data/books';
import Rating from '../../book-slider/rating';
import CartContext from '../../../context/CartContext';
export const Book = () => {
  const { addToCart } = useContext(CartContext);

  const {id} = useParams(); // id آي دي الكتاب اللي بضغط عليه بكون عبارة عن رقم لكن بكون سترنق

  const book = books.find(b => b.id === +id); // parseInt(id) == +id
  // +id الآي دي اللي باليو آر إل عبارة عن سترنق بكون, لهيك حولتو لنمبر لحتى يساوي آي دي الأوبجكت اللي بصفحة البوكس 
  // بقلو جيبلي آي دي الأوبجكت اللي فيه آي دي يساوي الآي دي اللي جاي من الكتاب اللي بضغط عليه, يعني حيجيبلي معلومات الكتاب اللي بضغط عليه 
  // console.log(book);

  const[qty, setQty] = useState(1);

  return (
    <div className="book">
      <div className="book-content">
        <img src={`/books/${book.image}`} alt={book.title} className="book-content-img"/>
        <div className="book-content-info">
          <h1 className="book-title">{book.title}</h1>
          <div className="book-author">
            by <span>{book.author}</span> (Auther)
          </div>
          <Rating rating={book.rating} reviews={book.reviews}/>
          <div className="book-add-to-cart">
            <input
            min="1"
            max="100"
            type="number"
            className='book-add-to-cart-input'
            value={qty}
            onChange={e => setQty(e.target.value)}
            />
            <button onClick={() => addToCart({...book, quantity: qty})} className="book-add-to-cart-btn">
              <i className="bi bi-cart-plus"></i>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <p className="book-description">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio natus eveniet, unde delectus velit saepe vitae reiciendis quas magnam doloribus mollitia quia nisi ex. Animi impedit placeat at eaque ipsa.
      </p>
      <div className="book-icons">
        <div className="book-icon">
          <small>Print Length</small>
          <i className="bi bi-file-earmark-break"></i>
          <b>{book.printLength} Pages</b>
        </div>
        <div className="book-icon">
          <small>Language</small>
          <i className="bi bi-globe"></i>
          <b>{book.language}</b>
        </div>
        <div className="book-icon">
          <small>Publication date</small>
          <i className="bi bi-calendar3"></i>
          <b>{book.PublicationDate}</b>
        </div>
      </div>
    </div>
  )
}
