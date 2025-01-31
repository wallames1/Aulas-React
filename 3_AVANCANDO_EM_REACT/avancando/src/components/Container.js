import React from 'react'

function Container({ children }) {
  return (
    <div>
        <h2>Este é um container</h2>
        {children}
    </div>
  )
}

export default Container