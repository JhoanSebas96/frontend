import React from 'react'
import { Courses } from '../data/DataCourses'
import { useLoaderData } from 'react-router-dom'

export const Course = () => {

  const course = useLoaderData();

  return (
    <div >
      <div className='title-course' >
        <h1>{course.titulo}</h1>
        <p>{course.facultad}</p>
        <a href={`/assets/files/${course.id}.pdf`} className='btn-pdf'>Plan de estudios</a>
      </div>
      <div className='content-info-course'>
        <p>INICIO: {course.inicio}</p>
        <p>VALOR: {course.valor}</p>
        <p>CRÉDITOS: {course.creditos}</p>
        <p>SNIES: {course.snies}</p>
        <p>SEDE: {course.modalidad}</p>
        <p>NIVEL ACADÉMICO: {course.nivel}</p>
        <p>DURACIÓN: {course.semestres}</p>
        <p>MODALIDAD: {course.modalidad}</p>
      </div>

      <div className='descrip-course'>
        <p>{course.descripcion}</p>
        <img src={`/assets/carreras/${course.id}.jpg`} alt='csu-areandina' />
      </div>

      <div className='info-course'>
        <h1>En lo que te vas a transformar</h1>
        <p>{course.aspiracion}</p>
        <h1>tus gustos y habilidades fortalecen tu decisión</h1>
        <p>{course.buscas}</p>
        <h1>este programa tiene lo que buscas</h1>
        <p>{course.gustos}</p>
      </div>
    </div>
  )
}


export async function loaderCourse ( {params} ) {
  const course = Courses.find((course) => course.id === params.carreraId);
  return course;
}