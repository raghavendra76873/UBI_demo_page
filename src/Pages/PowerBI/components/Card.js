import React from 'react'
import './Card.css'
import logo from './Vedio.png'
import './Navbar.css'

const Card = (props) => {
  return (
<div>

<div class="card horizontal-card1" id="card10"style={{borderRadius: props.radius}}>
  <div class="card-content10">
    <span class="text10">{props.number}</span>
    <a href={props.link}>
      <img src={logo} id='img10' alt="Image" style={{width:'100px',height:'50px'}} />
    </a>
    <a href={props.link} class="card-text10">{props.desc}</a>
    <p id='p10'>{props.text}</p>
  </div>
</div>

</div>



  )
}

export default Card