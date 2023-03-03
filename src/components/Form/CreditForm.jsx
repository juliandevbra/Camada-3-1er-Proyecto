import { useState } from 'react'

const CreditForm = () => {
    
    const [options, setOptions] = useState('')
    const [range, setRange] = useState(0)
    const [ingresos, setIngresos] = useState(null)
    let valores = ['USD', 'ARS', 'COP']
  return (
    <div>
        <h3>Moneda seleccionada: {options}</h3>
            <select  onChange={(event) => setOptions(event.target.value)}>
                <option selected value="" disabled>Select an option</option>
                {valores.map((valor, index) => (
                    <option key={index} value={valor}>{valor}</option>
                ))}
            </select>
            <h3>{range}</h3>
            <input min="1" max="12" type="range" value={range} onChange={(event) => setRange(event.target.value)}/>
            <h3>Tus ingresos: {ingresos}</h3>
            <input type="number" onChange={(e) => setIngresos(e.target.value)}/>

            <h1>Total: ${range*ingresos} {options}</h1>
    </div>
  )
}

export default CreditForm