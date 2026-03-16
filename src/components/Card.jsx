//User Card with User Logo, Description, Designation, Pay/hour in Dollars, Hire Button
const Card = (props) => {
  return (
        <div className='card'>
            <img src={props.logo} alt='User Logo' className='user-logo'/>
            <h2>{props.name}</h2>
            <p>{props.designation}</p>
            <p>{props.pay}</p>
            <button className='hire-button'>Hire</button>
        </div>
  )
}

export default Card