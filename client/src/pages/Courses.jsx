import React from 'react'
import Card from '../components/Card'
import { useEffect, useState } from 'react'
import { getAllCourses } from '../services/courseServices'

const Courses = () => {

    const [course, setCourse] = useState([]);
    const fetchCourse = async () => {
        const response = await getAllCourses();
        setCourse(response);
    }
    useEffect(() => {
        fetchCourse();
    }, []);

  return (
    <div classname="main-content">
        <h1>Cursos</h1>
        <div className="card">
        {course.map((course) => (
            <Card
                key={course.id}
                title={course.title}
                description={course.description}
                image={course.image}
                schedule={course.schedule}
                link={course.link}
                id={course.id}
                tickets={course.tickets}
            />
        ))}
        </div>
    </div>
  )
}

export default Courses
