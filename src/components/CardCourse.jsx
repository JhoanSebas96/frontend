import React from 'react'
import { Link } from 'react-router-dom'
import './CardCourse.css'
 

export const CardCourse = ({ course }) => {
  return (
    <Link to={`./${course.id}`} className='card-course'>
      <img src={`./assets/carreras/${course.id}.jpg`} alt='csu-areandina' className='card-course-img' />
      <div className='card-course-info'>
        <p className='card-course-title'>{course.titulo}</p>
        <div className='card-course-links'>
          <div>
            <p>{course.semestres}</p>
          </div>
          <div>
            <p >Virtual</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
