import React from "react"
import './Footer.css';
import { assets } from "../../assets/assets";
const Footer = () =>{
    return (
     <div className="footer" id="footer">
     <div className="footer-content">
         <div className="footer-content-left">
             <img src={assets.logo} alt="" ></img>
             <p>You're adding a safety check to make sure food_list has data before trying to use it. This avoids the error caused by trying to map over something that's not defined yet.</p>
         <div className="footer-social-icons">
             <img src={assets.facebook_icon} alt=""></img>
             <img src={assets.twitter_icon} alt=""></img>
             <img src={assets.linkedin_icon} alt=""></img>
            
         </div>
         </div>
         <div className="footer-content-center">
             <h2>COMPANY</h2>
            <ul>
             <li>Home</li>
             <li>About us</li>
             <li>Delivery</li>
             <li>Privacy policy</li>

            </ul>
         </div>
         <div className="footer-content-right">
             <h2>GET IN TOUCH</h2>
             <ul>
                 <li>+919791474271 </li>
                 <li>mazhilkulambukadai@gmail.com</li>
             </ul>
         </div>
     </div>
     <hr></hr>
     <p className="footer-copyright">Copyright 2024 @ mazhilkulambukadai.com - All Right Reserved.</p>
 </div>  
    )
}
export default Footer