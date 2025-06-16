import React from 'react'
import '../components/usercard.css'
const Usercard = (props) => {
  return (
    <div className='user-container'>
        <div>
        <p id='title'>{props.name}</p>
        <img src={props.img} alt="sample" id='userimg'/>
        <p id='user-desc'>{props.desc}</p>
        </div>

        
    </div>
    
  )
}

export default Usercard
