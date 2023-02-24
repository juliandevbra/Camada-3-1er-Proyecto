import './Card.css'

const Card = ({pizza}) => {
  const {id, img, tipo, precio} = pizza
  return (
    <div key={id} className='card'>
      <img src={img} alt="" className="card-img"/>
      <h3>{tipo}</h3>
      <h4>{precio}</h4>
    </div>
  )
}

export default Card