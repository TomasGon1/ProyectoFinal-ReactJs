import React from 'react'
import "./ItemListContainer.css"

const ItemListContainer = (props) => {
  return (
    <div className='container-div'>
        <h1 className='greetings'>{props.greetings}</h1>
    </div>
  )
}

export default ItemListContainer