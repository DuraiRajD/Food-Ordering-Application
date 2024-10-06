// import { createContext, useEffect, useState } from "react";
// import { food_list } from "../assets/assets";


// export const StoreContext = createContext(null) 

// const StoreContextProvider =(props)=>{

//     const [cartItems,setCartItems]=useState({});

//     const addToCart= (itemId)=>{
//         if(!cartItems[itemId]) {
//             setCartItems((prev)=>({...prev,[itemId]:1}))
//         }
//         else{
//             setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
//         }
//     }

//     const removeFromCart = (itemId)=>{
//         setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
//     }

//     useEffect(()=>{
//         console.log(cartItems);
//     },[cartItems])
//     const contextValue ={
//         food_list,
//         cartItems,
//         setCartItems,
//         addToCart,
//         removeFromCart
//     }
//     return (
//        <StoreContext.Provider value={contextValue}>
//         {props.children}
//        </StoreContext.Provider>
//     )
// }
// export default StoreContextProvider;



import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets"; // Assuming this is an array of food items

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});

    // Add item to cart or increase its quantity
    const addToCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1, // Add or increment
        }));
    };

    // Remove item from cart or decrease its quantity
    const removeFromCart = (itemId) => {
        setCartItems((prev) => {
            const updatedCart = { ...prev };
            if (updatedCart[itemId] > 1) {
                updatedCart[itemId] -= 1;
            } else {
                delete updatedCart[itemId]; // Remove item if quantity is zero
            }
            return updatedCart;
        });
    };

    // useEffect(() => {
    //     console.log(cartItems);
    // }, [cartItems])
    const getTotalCartAmount=()=>{
        let totalAmount=0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0){
                let itemInfo = food_list.find((product)=>product._id===item);
            totalAmount += itemInfo.price* cartItems[item];
            }
            
        }
        return totalAmount;
    }

    const contextValue = {
        food_list,    // Assuming this contains the food details like name, price, etc.
        cartItems,    // Stores cart item IDs and quantities
        addToCart,    // Function to add items
        removeFromCart,
        getTotalCartAmount
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
