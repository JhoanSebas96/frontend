import React from 'react'
import { Header } from '../components/Header'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import logo from '../assets/CSUYOPAL.jpg'

export const LayoutPublic = () => {
  return (
    <div className='root'>
      <Header />
      <Outlet />
      <FloatingWhatsApp 
        accountName='CSU-Yopal Areandina'
        phoneNumber='573203965404'
        avatar={logo}
        chatMessage={`Hola  🤝 \n¿Cómo te podemos ayudar?`}
        allowClickAway = {true}
      />
      <Footer />
      <ScrollRestoration />
    </div>
  )
}
