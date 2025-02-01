import React from 'react'

function UserDetails({name, age, job}) {

   
  return (
    <div>
        <h2>{name}</h2>
        <p>idade:{age}</p>
        <p>profissao:{job}</p>
        {age >= 18 ? (
          <p>pode tirar a habilitação</p>
        ) : (
          <p>menor de idade</p>
        )}
    </div>
  )
}

export default UserDetails