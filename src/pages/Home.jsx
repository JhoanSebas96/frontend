import React from 'react'
import Banner1 from '../assets/Banner1.png'
import Video from '../assets/video.mp4'
import { CardSlider } from '../components/CardSlider';
import logo from '../assets/footer.png'
import img1 from '../assets/img1.jpeg'
import img2 from '../assets/img2.jpeg'
import img3 from '../assets/img3.jpeg'




export const Home = () => {
  return (
    <>
      <img src={Banner1} className='Banner1' alt='CSU AREANDINA' />
      <section className='csu-section'>
        <div className='div-csu'>
          <div className='text-csu'>
            <img
              className='logo'
              src={logo}
              alt='logo'
            />
            <p>Los Centros de Servicio Universitario son espacios físicos que ofrece la institución, donde estudiantes de la modalidad virtual tienen al alcance asesores que los guían y resuelven dudas en todo lo concerniente a sus estudios a través de la metodología virtual.</p>
          </div>

          <div>
            <video src={Video} className='video1' loop autoPlay muted ></video>
          </div>
        </div>

      </section>
      <div className='conta'>
        <section className='slider'>
          <h1>Programas de Interés</h1>
          <CardSlider cards={cards} />
        </section>
      </div>
      <div className='content-flayers' >
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
      </div>

    </>
  )
}


const cards = [
  {
    title: 'Tecnologia en Logistica',
    description: '6 Semestres',
    id: 'logistica'
  },
  {
    title: 'Administración Pública',
    description: '8 Semestres',
    id: 'administracion-publica'
  },
  {
    title: 'Ingenieria Industrial',
    description: '9 Semestres',
    id: 'ingenieria-industrial'
  },
  {
    title: 'Especialización en Alta Gerencia',
    description: '2 Semestres',
    id: 'alta-gerencia'
  },
  {
    title: 'Especialización en Gerencia Financiera',
    description: '2 Semestres',
    id: 'gerencia-financiera'
  },
  {
    title: 'Maestria en Gerencia de Mercadeo Digital',
    description: '4 Semestres',
    id: 'gerencia-mercadeo-digital'
  },
];
