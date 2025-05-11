import React from 'react'
import "./Footer.css"
import logo from "../../assets/logo.webp"
import instagram_icon from "../../assets/instagram.png"
import facebook_icon from "../../assets/facebook.png"
import whatsapp_icon from "../../assets/whatsapp.png"
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={logo} alt="" height="40px" />
            <p>Sneakers</p>
        </div>
        <ul className='footer-links'>
<li id= 'i11'>About
<p>Trendy sneakers website</p></li>
<li>Products
<p>men sneaker</p>
<p>women sneaker</p>
<p>kids sneaker</p></li>
<li>Offices
<p>Gurgaon</p>
<p>Mumbai</p>
</li>
<li>Company
<p>Sneakers pvt limited</p></li>
<li>Contact
<p>+91 7568943511</p>
<p>sneakers@gmail.com</p></li>
        </ul>
        <div className='footer-social-icon'>
<div className="footer-icon-container">
<img src={instagram_icon} alt="" height="30px" />
</div>
<div className="footer-icon-container">
<img src={facebook_icon} alt="" height="30px"  />
</div>
<div className="footer-icon-container">
<img src={whatsapp_icon} alt=""  height="30px" />
</div>
        </div>
        <div className="footer-copyright">
            <hr/>
            <p>Copyright @ 2025 - All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer