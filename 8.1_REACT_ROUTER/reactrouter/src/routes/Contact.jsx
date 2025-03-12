import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
        <h1>Pagina de Contatos</h1>
        {/*5 - nested routes */}
        <p>
            <Link to="/Contact/1">Forma de Contato 1</Link>
        </p>
        <p>
            <Link to="/Contact/2">Forma de Contato 2</Link>
        </p>
        <p>
            <Link to="/Contact/3">Forma de Contato 3</Link>
        </p>
    </div>
  )
}

export default Contact