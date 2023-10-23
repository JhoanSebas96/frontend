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
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMore />}
          >
            <Typography>Primera Pregunta</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMore />}
          >
            <Typography>Segunda Pregunta</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMore />}
          >
            <Typography>Tercera Pregunta</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  )
}
export default Contact