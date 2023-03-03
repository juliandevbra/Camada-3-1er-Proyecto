import React from 'react'

const FormCard = ({user}) => {
  return (
    <div>
        <h4>Nombre: {user.name}</h4>
        <h4>Empresa: {user.company}</h4>
    </div>
  )
}

export default FormCard