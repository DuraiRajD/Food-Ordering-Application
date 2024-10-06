import React, { useContext } from "react";
import './Cart.css'
import { StoreContext } from "../../context/StoreContext";
import { Navigate } from "react-router-dom";

const Cart=()=>{
    const { cartItems, food_list, removeFromCart,getTotalCartAmount } = useContext(StoreContext);

    return(
        <div className="cart">
            <div className="cart-items">
            <div className="cart-items-title">
                <p>Items</p>
                <p>Title</p>
                <p>Price</p>
                <p>quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <br></br>
            <hr></hr>
            {food_list.map((item,index)=>{
                if(cartItems[item._id]>0)
                {
                    return(
                        <div> <div className="cart-items-title cart-items-item">
                        <img src={item.image} alt=""></img>
                        <p>{item.name}</p>
                        <p>Rs.{item.price}</p>
                        
                        <p>{cartItems[item._id]}</p>
                        <p>Rs.{item.price*cartItems[item._id]}</p>
                        <p  onClick={()=>removeFromCart(item._id)} className="cross">x</p>
                    </div>
                    <hr></hr></div>
                       
                    )
                }
            })}
        </div>
        <div className="cart-bottom">
            <div className="cart-total">
            <h2>Cart Totals</h2>
            <div>
                <div className="cart-total-details">
                    <p>Subtotal</p>
                    <p>Rs.{getTotalCartAmount()}</p>
                    </div>
                    <hr/>
                <div className="cart-total-details">
                    <p>Delivery Fee</p>
                    <p>{getTotalCartAmount()===0?0:2}</p>
                </div>
                <hr/>
                <div className="cart-total-details">
                    <b>Total</b>
                    <b>Rs.{getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
                </div>
            </div>
            <button onClick={()=>Navigate('/order')}>PROCEED TO CHECKOUT</button>
            </div>
        </div>
        <div className="cart-promocode">
            <div>
                <p>If you have a promo code,Enter it here</p>
                <div className="cart-promocode-input">
                <input type="text" placeholder="promo code"></input>
                <button>Sumbit</button>
                </div>
            </div>
        </div>
        </div>
    )
}
export default Cart


// import React, { useContext } from "react";
// import './Cart.css';
// import { StoreContext } from "../../context/StoreContext";

// const Cart = () => {
//     const { cartItems, food_list, removeFromCart } = useContext(StoreContext);

//     // Get food item details by ID
//     const getItemDetails = (itemId) => {
//         return food_list.find((item) => item.id === itemId);
//     };

//     return (
//         <div className="cart">
//             <div className="cart-items">
//                 <div className="cart-items-title">
//                     <p>Items</p>
//                     <p>Title</p>
//                     <p>Price</p>
//                     <p>Quantity</p>
//                     <p>Total</p>
//                     <p>Remove</p>
//                 </div>
//                 <br /><br />
//                 {Object.keys(cartItems).length > 0 ? (
//                     Object.keys(cartItems).map((itemId) => {
//                         const itemDetails = getItemDetails(parseInt(itemId));
//                         return itemDetails ? (
//                             <div key={itemId} className="cart-item">
//                                 <p>{itemDetails.name}</p>
//                                 <p>{itemDetails.title}</p>
//                                 <p>${itemDetails.price}</p>
//                                 <p>{cartItems[itemId]}</p>
//                                 <p>${itemDetails.price * cartItems[itemId]}</p>
//                                 <button onClick={() => removeFromCart(itemId)}>Remove</button>
//                             </div>
//                         ) : null;
//                     })
//                 ) : (
//                     <p>No items in the cart</p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Cart;
