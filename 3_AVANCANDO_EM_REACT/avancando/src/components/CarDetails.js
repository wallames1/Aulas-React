import React from 'react'

function CarDetails({brand, km, color}) {
  return (
    <div>
        <h2>
         DETALHE DO CARRO       
        </h2> 
        <ul>
            <li>Marca: {brand}</li>
            <li>KM: {km}</li>
            <li>Cor: {color}</li>

        </ul>
    </div>
  )
}

export default CarDetails