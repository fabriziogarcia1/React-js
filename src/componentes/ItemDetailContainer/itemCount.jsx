import React, { useState } from 'react'

const ItemCount = ( {cantidad, handleRestar, handleSumar, handleAgregar}) => {
  
  
  return (
    <div>
      <div className='div-suma-resta'>
        <button onClick={handleRestar} className='boton-suma-resta'>-</button>
        <p className='parrafo-meses'>Alquilar {cantidad} Meses </p>
        <button onClick={handleSumar} className='boton-suma-resta'>+</button>
      </div>
      <div>
      <button onClick={handleAgregar} className='agregar-producto'>Agregar al Carrito</button>
      </div>
    </div>
  )
}

export default ItemCount;