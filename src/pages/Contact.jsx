import React from 'react'
import { MapLeaflet } from '../components/MapLeaflet'
import { ContactForm } from '../components/ContactForm'

export const Contact = () => {
  return (
    <div className='contact-page'>
      <img src={`/assets/banner-contacto.png`} className='banner-contact' alt='csu-areandina' />
      <div className='map-contactform'>
        <MapLeaflet />
        <ContactForm />
      </div>
    </div>
  )
}
