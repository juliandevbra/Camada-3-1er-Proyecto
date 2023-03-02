import { useState } from 'react'

const Form = () => {
    const [user, setUser] = useState({
        email: '',
        pass: ''
    })

    const [show, setShow] = useState(false)
    const [err, setErr] = useState(false)


    const handleSubmit = (event) => {
        event.preventDefault()
        if(user.pass.length > 6){
         setShow(true)
         setErr(false)
        } else setErr(true)
    }

  return ( 
    <>
        <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input type="email" onChange={(event) => setUser({...user, email: event.target.value})}/>
            <label>password</label>
            <input type="password" onChange={(event) => setUser({...user, pass: event.target.value})}/>
            {err ? 'La contraseña no es correcta' : null}
            {err && 'La contraseña no es correcta'}
            <button>Enviar</button>
        </form>

        {
            show
            ? 
            <>
                <h4>Se ha logueado con éxito!</h4>
                <h4>Email: {user.email}</h4>
                <h4>Pass: {user.pass}</h4>
            </>
            :
            null
        }
        {
            show
            && 
            <>
                <h4>Se ha logueado con éxito!</h4>
                <h4>Email: {user.email}</h4>
                <h4>Pass: {user.pass}</h4>
            </>
        }
        

    </>
  )
}

export default Form