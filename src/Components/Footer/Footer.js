import React from "react"
import "./Footer.css"
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>

        <div className="footer_cards flex">

              <div className="flex">
              <div className="footer_card">
                <h4 className="footer_card_tit">ASICS</h4>
              </div>


              <div className="footer_nav ">
              <nav className='Footer_menu'>
                <ul className='footer_navs flex'>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/delivery">Delivery</Link>
                  </li>
                  <li>
                    <Link to="/contacts">Contacts</Link>
                  </li>
                </ul>
              </nav>
              </div>
              </div>



              <div className="footer_share">
                <div className="footer_shares flex">

                  <Link to="https://t.me/+996707038885">
                  <FaTelegramPlane className="link_card2" />
                  </Link>

                  <Link to="https://wa.me/qr/5CCLEVSIBJ43F1"><FaWhatsapp className="link_card2"/></Link>

                  <Link to="https://www.instagram.com/k_mir1anovna?igsh=ZGUzMzM3NWJiOQ==">
                  <FaInstagram className="link_card2"/>
                  </Link>
                  
                  

                </div>

                <div className="footer_share_card">
                <Link to="mailto:bekbolotovakunduz477@gmail.com" className="footer_phon">
                <span>bekbolotovakunduz477@gmail.com</span>
                </Link>
              </div>

              </div>

              </div>

        </div>
      </footer>
    </>
  )
}

export default Footer
