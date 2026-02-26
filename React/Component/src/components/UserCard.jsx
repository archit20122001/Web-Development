import React from 'react'
import birdlogo from '../assets/birdlogo.png'
import './UserCard.css'

const UserCard = () => {
  return (
    <div className='user-container'>
      <p id='user'>Archit Kumar Singh</p>
      <img id='user-img' src={birdlogo} alt="User Logo" />
      <p id='user-desc'>Description of the card</p>
    </div>
  )
}

export default UserCard