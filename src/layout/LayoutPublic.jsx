import React from 'react'
import { Header } from '../components/Header'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import logo from '../assets/CSUYOPAL.jpg'

export const LayoutPublic = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <FloatingWhatsApp 
        accountName='CSU-Yopal Areandina'
        phoneNumber='573208752152'
        avatar={logo}
        chatMessage={`Hola  🤝 \n¿Cómo te podemos ayudar?`}
        allowClickAway = {true}
      />
      <Footer />
      <ScrollRestoration />
    </div>
  )
}
