import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const data = [
    {
      id: 1,
      name: 'John Doe',
      designation: 'Software Engineer',
      pay: '$50/hour',
      logo: 'https://randomuser.me/api/portraits/men/76.jpg'
    },
    {
      id: 2,
      name: 'Jane Smith',
      designation: 'Product Manager',
      pay: '$60/hour',
      logo: 'https://randomuser.me/api/portraits/women/75.jpg'
    },
    {
      id: 3,
      name: 'Michael Johnson',
      designation: 'UX Designer',
      pay: '$40/hour',
      logo: 'https://randomuser.me/api/portraits/men/76.jpg'
    },
    {
      id: 4,
      name: 'Emily Davis',
      designation: 'Data Scientist',
      pay: '$70/hour',
      logo: 'https://randomuser.me/api/portraits/women/75.jpg'
    },
    {
      id: 5,
      name: 'David Wilson',
      designation: 'DevOps Engineer',
      pay: '$55/hour',
      logo: 'https://randomuser.me/api/portraits/men/76.jpg'
    }
  ]

  return (
    // The container goes OUTSIDE the map function
    <div className="card-container">
      {data.map((user) => (
        <Card
          key={user.id} // The key goes on the element directly returned by map
          name={user.name}
          designation={user.designation}
          pay={user.pay}
          logo={user.logo}
        />
      ))}
    </div>
  )
}

export default App