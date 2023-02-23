const Card = (props) => {
    console.log(props)
  return (
    <>
        <h3>Titulo de la card: Elemento n° {props.elemento}</h3>
    </>
  )
}

export default Card