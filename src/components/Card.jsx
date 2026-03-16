//User Card with User Logo, Description, Designation, Pay/hour in Dollars, Hire Button
import React from 'react'

const Card = () => {
  return (
    <div>
        {/* <h1>Hello, World!</h1> */}
        <div className='card'>
            <img src='https://randomuser.me/api/portraits/men/75.jpg' alt='User Logo' className='user-logo'/>
            <h2>John Doe</h2>
            <p>Software Engineer</p>
            <p>$50/hour</p>
            <button className='hire-button'>Hire</button>
        </div>
    </div>
  )
}

export default Card