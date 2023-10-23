import React from 'react'
import { Courses } from '../data/DataCourses';
import { useLoaderData } from 'react-router-dom';
import { CardCourse } from '../components/CardCourse';


const AcademicCourses = () => {

  const carreras = useLoaderData();
  const tecno = carreras.tecnologias;
  const preg = carreras.pregrados;
  const esp = carreras.especializaciones;
  const maes = carreras.maestrias;

  
  return (
    <div className='academic-courses'>
      <div className='head-category'style={{backgroundColor: 'var(--orange)'}}>
        <p className='title-category' >Tecnologías</p>
      </div>
      <div className='card-grid-courses'>
        {tecno.map((course, index) => (
          <CardCourse course={course} key={index}  />
        ))}
      </div>
      <div className='head-category' style={{backgroundColor: 'var(--green)'}}>
        <p className='title-category'>Pregrados</p>
      </div>
      <div className='card-grid-courses'>
        {preg.map((course, index) => (
          <CardCourse course={course} key={index}  />
        ))}
      </div>
      <div className='head-category' style={{backgroundColor:'#e6007e'}}>
        <p className='title-category'>Especializaciones</p>
      </div>
      <div className='card-grid-courses'>
        {esp.map((course, index) => (
          <CardCourse course={course} key={index}  />
        ))}
      </div>
      <div className='head-category' style={{backgroundColor:'#e6007e'}}>
        <p className='title-category'>Maestrías</p>
      </div>
      <div className='card-grid-courses'>
        {maes.map((course, index) => (
          <CardCourse course={course} key={index}  />
        ))}
      </div>

    </div>
  )
}

export async function loaderAcademicCourse() {
  const carre = await Courses;
  const tecnologias = carre.filter((carrera) => carrera.nivel === 'Tecnología');
  const pregrados = carre.filter((carrera) => carrera.nivel === 'Profesional');
  const especializaciones = carre.filter((carrera) => carrera.nivel === 'Especializaciones');
  const maestrias = carre.filter((carrera) => carrera.nivel === 'Maestrías');
  return { tecnologias, pregrados, especializaciones, maestrias };
}

export default AcademicCourses