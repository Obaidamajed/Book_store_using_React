import React, { useContext } from 'react'
import CartContext from '../../../context/CartContext'
import "./cart.css"


export const Cart = () => {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext)


  const totalPrice = cartItems.reduce((acc, cur) => acc + cur.price * cur.quantity, 0).toFixed(2)
  {/* مبدأ العمل بكون كالتالي: أول إشي بكون الآكك يساوي صفر وبجمع عليهم ضرب البرايس اللي في الأوبجكت الأول اللي في أرراي الكارتس إنفو وبخزن النتيجة في الآكك, بعدين برجع بجمع آخر نتيجة خزنها اللي هي صفر + برايس الأوبجكت الأول ضرب كوانتيتي الأوبجكت الأول مع نتيجة ضرب البرايس اللي في الاوبجكت الثاني ب الكوانتيتي اللي في الاوبجكت الثاني.
  الخلاصة الناتج بكون عبارة عن مجموع ضرب كل برايس وكوانتيتي لكل أوبجكت وبتم تخزينهم بالآكك بالأخير */}
  {/* 0 قيمة ال acc الأولية  */}
  return (
    <div className="cart">
      <div className="cart-title">Your Shopping Cart</div>
      <div className="cart-wrapper">

{/* Start Cart Items  */}
        <div className="cart-items">
          {cartItems.map(item => 
            <div key={item.id} className="cart-item">
              <img src={`/books/${item.image}`} alt={item.title}className="cart-item-img"></img> 
              {/* /books/ هذا ملف البوكس اللي في فولدر البوبلك */}
              <div className="cart-item-info">

                <div>
                  <div className="cart-item-book-title">
                    <b>Title: </b> {item.title}
                  </div>
                  <div className="cart-item-author">
                    <b>Author: </b> {item.author}
                  </div>
                </div>

              <div>

                  <div className="cart-item-quantity">
                    <button onClick={() => addToCart({...item, quantity: item.quantity + 1})}>
                      <i className="bi bi-plus-lg"></i>
                    </button>
                    <b>{item.quantity}</b>
                    <button disabled = {item.quantity <= 1}
                    onClick={() => addToCart({...item, quantity: item.quantity - 1})}>
                      {/* disabled = {item.quantity <= 1} من خلالها ما بنزل الآيتيم عن رقم 1 يعني ما بقدر اليوزر يقلل الآيتيم عن رقم واحد بصفحة الكارت  */}
                      <i className="bi bi-dash-lg"></i>
                    </button>
                  </div>

                  <div className="cart-item-price">
                    ${(item.price * item.quantity).toFixed(2)} 
                    {/* toFixed(2) بجيب رقمين بعد الفاصلة العشرية */}
                  </div>
                  <i onClick={() => removeFromCart(item.id)} className="bi bi-trash-fill"></i>

                </div>

              </div>
            </div>
            )}
        </div>
{/* End Cart Items  */}

{/* Start Cart Summary  */}
        <div className="cart-order-summary">

            <div className="oreder-summary-title">
              ORDER SUMMARY
            </div>

            <div className="order-summary-item">
              <span>Subtotal</span>
              <span>
                ${totalPrice}
              </span>
            </div>

            <div className="order-summary-item">
              <span>Shopping Coast</span>
              <span>
                0
              </span>
            </div>

            <div className="order-summary-item">
              <span>Discount</span>
              <span>
                0
              </span>
            </div>

            <div className="order-summary-item">
              <span>Total</span>
              <span>
                ${totalPrice}
                {/* الريديوس بتعمل لوب بالكارت إنفو  */}
              </span>
            </div>
            
        </div>
{/* End Cart Summary  */}


      </div>
      
    </div>
  )
}
