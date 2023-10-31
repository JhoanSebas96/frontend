import React, { useEffect, useState } from 'react'
import logoFooter from '../assets/footer.png'
import footer960 from '../assets/footer960.png';
import './Footer.css'
import { Link } from 'react-router-dom'
import { BsWhatsapp, BsFacebook, BsGeoAltFill, BsInstagram } from 'react-icons/bs';


export const Footer = () => {


  const [smallScreen, setSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setSmallScreen(window.innerWidth < 960);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='footer'>
      {!smallScreen ? (
        <img src={logoFooter} className='logo-footer' alt='CSU-AREANDINA' />
      ) : (
        <img src={footer960} className='logo-footer' alt='CSU-AREANDINA' />
      )
      }
      <ul className='foot-icons'>
        <a href='https://www.facebook.com/csuareandina' target='_blank' ><BsFacebook className='foot-icon' /></a>
        <a href='https://www.instagram.com/areandina_casanare_arauca/' target='_blank'><BsInstagram className='foot-icon' /></a>
        <a href='http://api.whatsapp.com/send?phone=573203965404' target='_blank'> <BsWhatsapp className='foot-icon'/> </a>
      </ul>
      <div className='foot-items'>
        <ul className='foot-links'>
          {LinkItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className='footer-link' to={item.url}> {item.title} </Link>
              </li>
            )
          })}
          <li><a className='footer-link' href={`/assets/files/politicas-de-privacidad-areandina.pdf`} target='_blank'>Políticas de Privacidad</a></li>
        </ul>
        <ul className='contact-items'>
          { ContactItems.map((contact, index) => {
            return (
              <div className='contact-item' key={ index }>
                <h3>{ contact.title }</h3>
                <p> <BsGeoAltFill className='icon-foot'/>{ contact.add }</p>
                <p><BsWhatsapp className='icon-foot'/> { contact.phone }</p>
              </div>
            )
          })}
        </ul>
      </div>
    </div>
  )
}



const LinkItems = [
  {
    title: 'Inicio',
    url: '/'
  },
  {
    title: 'Nosotros',
    url: '/nosotros'
  },
  {
    title: 'Oferta Académica',
    url: '/oferta-academica'
  },
  {
    title: 'Contacto',
    url: '/contacto'
  },
];

const ContactItems = [
  {
      title: 'Yopal',
      phone: '320 396 5404',
      add: 'Cra. 29 # 18-03 - Oficina 130 C.C. El Hobo'
  },
  {
      title: 'Paz de Ariporo',
      phone: '321 917 8877',
      add: 'Calle 10 # 6-12 '
  }
]