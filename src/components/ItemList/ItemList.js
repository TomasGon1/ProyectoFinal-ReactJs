import React from 'react'
import Item from "../Item/Item"

const ItemList = ({item}) => {
  return (
    <div className='row' id='itemList'>
      {item.map(i =>
        <div className='col-md-3' key={i.id}>
          <Item items={item}/>
          </div>
        )}
      
    </div>
  )
}

export default ItemList