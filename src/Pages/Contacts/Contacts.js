import React from 'react';
import "./Contacts.css";
import { FaWhatsapp } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

const Contacts = () => {
  return (
    <>

      <section className='map_c'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d735.5995417556852!2d78.38666766015602!3d42.483087066586336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38865b5c92042535%3A0x78a9de24f2cc9c3b!2sIT-Academy%20Karakol!5e0!3m2!1sen!2skg!4v1716635134251!5m2!1sen!2skg" width="100%" height="400" allowfullscreen="" loading="lazy" title='qwer' referrerpolicy="no-referrer-when-downgrade"></iframe>
      </section>

    <section>
      <div className="container">

        <p className="contact_phon_tit">Мы в соц.сетях</p>
        <p className="contact_phon"><FaTelegramPlane  className='Whatsapp'/> <span>+996 708 985 426</span>   </p>
        <p className="contact_phon"><FaInstagram className='Whatsapp'/> <span>._kuzua.06</span> </p>
        
      </div>
    </section>
    </>
  )
}

export default Contacts
