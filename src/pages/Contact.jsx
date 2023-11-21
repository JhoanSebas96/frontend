import React from 'react'
import { MapLeaflet } from '../components/MapLeaflet'
import { ContactForm } from '../components/ContactForm'
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import { ExpandMore } from '@mui/icons-material'

const Contact = () => {
  return (
    <div className='contact-page'>
      <img src={`/assets/banner-contacto.png`} className='banner-contact' alt='csu-areandina' />
      <div className='map-contactform'>
        <MapLeaflet />
        <ContactForm />
      </div>
      <div className=' container-accordion '>
        <h1 className='title-faqs'>Preguntas Frecuentes</h1>
        {Faqs.map((faq, index) => {
          return (
            <Accordion key={index}>
              <AccordionSummary
                expandIcon={<ExpandMore />}
              >
                <Typography>{ faq.title }</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{ faq.resp }</Typography>
              </AccordionDetails>
            </Accordion>
          )
        })}
      </div>
    </div>
  )
}
export default Contact

const Faqs = [
  {
    title: '¿Que modalidad es? ',
    resp: '100% virtual'
  },
  {
    title: 'Sedes de la universidad',
    resp: '-Bogotá \n-Pereira \n-Valledupar \nRecuerda que la modalidad es virtual y puedes estudiar desde cualquier lugar.'
  },
  {
    title: 'Modalidad de pago',
    resp: '-Contado \n-Cesantías \n-Crédito'
  },
  {
    title: '¿La universidad está acreditada o certificada?',
    resp: 'La universidad cuenta con acreditación multicampus'
  },
  {
    title: 'Requisitos de inscripción',
    resp: 'Para iniciar con el proceso solo son requeridos los siguientes documentos:\n-Documento de identidad \n-Diploma bachiller \n-Icfes \n-Dirección y ciudad de residencia. \n-Correo electrónico personal'
  },
  {
    title: 'Convenios',
    resp: '-Fuerzas militares \n-Coomeva \n-Sena \nEntre otros...'
  },
  {
    title: '¿Los títulos Sena son homologables? ',
    resp: 'Sí...'
  },
  {
    title: '¿Tienen posgrados? ',
    resp: 'Sí...\n-Esp. en Auditoria en Salud...$ 7.260.000 \n-Esp. en Informática Educativa...$ 3.490.000 \n-Esp. en Pedagogía y Docencia...$ 3.540.000\n-Esp. Gerencia en Seguridad y Salud en el Trabajo...$ 7.060.000\n-Esp. Gestión Ambiental...$ 3.660.000\n-Esp. Gerencia Financiera...$ 5.130.000\n-Esp. Alta Gerencia...$ 5.190.000\n-Esp. En dercho de autor, propiedad industrial y nuevas tecnologias...$ 4.350.000\n-Maestria en Gerencia de Mercadeo Digital...$ 5.840.000\n-Maestria en Epidemiologia...$ 7.830.000\n-Maestria en Innovación...$ 6.630.000'
  },
  {
    title: 'Beneficios que te acercan a tu meta',
    resp: '- Contarás con una red de apoyo de más de 39 Centros de Servicio Universitario a nivel nacional\n- Obtén un 20% de descuento en tu matrícula\n- Proceso de admisión sin entrevista, ni cobros de inscripción y homologación\n- Aprende a través de una moderna plataforma de e-learning que facilita tutorías, guías, material bibliográfico e interacción con los docentes.\n- Accede a ofertas laborales en nuestro portal de empleo donde cientos de empresas analizarán tu hoja de vida.'
  }
]