import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetails = () => {

    //this is the implementation of dynamic routing 
    const a = useParams()

  return (
    <div>{a.id}CourseDetails</div>
  )
}

export default CourseDetails