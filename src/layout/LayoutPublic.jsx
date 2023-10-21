import React from 'react'
import { Header } from '../components/Header'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import { Footer } from '../components/Footer'

export const LayoutPublic = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </div>
  )
}
