import React from 'react'

const NavBar = () => {

    let titulos = ['Home', 'Catalogo', 'About us', 'Contacto']

  return (
    <div style={{display: 'flex', justifyContent:'space-around'}}>
      {titulos.map((titulo, index) => <p key={index}>{titulo}</p>)}
    </div>
  )
}

export default NavBar