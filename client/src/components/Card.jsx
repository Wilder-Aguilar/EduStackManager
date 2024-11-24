import React, { useEffect, useState } from 'react'
import { getAllCourses } from '../services/courseServices'


const Card = ({title, description, image, schedule, link, id, tickets}) => {

  return (
    <section className='card-item'>
      <div>
        <img 
            src={image}
            alt="card"
            width="300"
            height="200"/>
      </div>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <p>{schedule}</p>
        <p>{link}</p>
        <p>{tickets}</p>
      </div>
      <div>
        <button className="button">Inscribete</button>
      </div>
    </section>
  )
}

export default Card
