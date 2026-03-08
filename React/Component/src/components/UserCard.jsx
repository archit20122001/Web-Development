import React from 'react'
import birdlogo from '../assets/birdlogo.png'
import './UserCard.css'

const UserCard = ({ name, img, desc }) => {
  return (
    <div className='user-container'>
      <p id='user'>{name}</p>
      <img id='user-img' src={img} alt={name} />
      <p id='user-desc'>{desc}</p>
    </div>
  )
}

export default UserCard