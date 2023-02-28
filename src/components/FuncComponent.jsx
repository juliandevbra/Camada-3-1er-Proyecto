import { useState } from 'react'

const FuncComponent = () => {
    const [estudiante, setEstudiante] = useState({
        name: 'Girlesa',
        country: 'Colombia'
    })
    const [ count, setCount] = useState(0)

    const changeName = () =>{ 
        estudiante.name === 'Girlesa' 
        ?
        setEstudiante({...estudiante, name: 'Julieth'})
        :
        setEstudiante({...estudiante, name: 'Girlesa'})
    }
  return (
    <div>
        <h1>Ejemplo cambiar nombre</h1>
        <h2>{estudiante.name}</h2>
        <button onClick={changeName}> Cambiar nombre</button>
        {/* 1. La condición 
        ? 
        2. se va a ejecutar si es true 
        : 
        3.se va a ejecutar si es false  */}
        {
            estudiante.name === 'Girlesa' 
            ?
            <h3>{estudiante.name}! Veo que eres buena en Backend!</h3>
            :
            <h3>{estudiante.name}! Buenisimos esos estilos en CSS!</h3>
        }

        <h1>Ejemplo Contador</h1>
        <button onClick={() => setCount(count + 1)}>+</button>
        {count}
        <button disabled={count===0} onClick={() => setCount(count - 1)}>-</button>
    </div>
  )
}

export default FuncComponent