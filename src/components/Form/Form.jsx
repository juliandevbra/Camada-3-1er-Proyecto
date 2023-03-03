import { useState } from 'react'
import FormCard from './FormCard'

const Form = () => {
    const [user, setUser] = useState({
        name: '',
        company: ''
    })

    const [show, setShow] = useState(false)
    const handleSubmit = (event) => {
        event.preventDefault()
    }
  
  return ( 
    <>
        <form onSubmit={handleSubmit} >
            <label>Nombre</label> 
            <input type="text" onChange={(event) => setUser({...user, name: event.target.value})}/>
            <label>Empresa en la que trabajas</label>
            <input type="text" onChange={(event) => setUser({...user, company: event.target.value})}/>
            <button>Enviar</button>
        </form>
        {/* 
        1. La condición 
        ?
        2. Lo que se va a ejecutar si la condición es true
        :
        3. Lo que se va a ejecutar si la condición es false
        
        */}
        { show ?  <FormCard user={user}/>: null }
        {show && <FormCard user={user}/>}
    </>
  )
}

export default Form