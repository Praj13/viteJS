import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div className='card'>
      <img src="https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=717/https://s3.cointelegraph.com/uploads/2023-01/158029af-a86a-402f-a5b5-e915cc69f138.JPG" alt="" width={233} style={{border:"5px solid green"}}/>
      <h1>{props.title}</h1>  
      <p>{props.description}</p>
    </div>
  )
}

export default Card
