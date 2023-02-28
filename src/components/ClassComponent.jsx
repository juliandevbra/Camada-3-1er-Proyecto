import { Component } from 'react'

export default class ClassComponent extends Component {
    constructor(){
        super()
        this.state = {
            name: 'Girlesa',
            country: 'Colombia'
        }
        this.changeName = this.changeName.bind(this)
    }
    changeName(){
       if(this.state.name === 'Girlesa') this.setState({name: 'Julieth'})
       else this.setState({name: 'Girlesa'})
    }
  render() {
      console.log(this.state)
    return (
      <div>
          <h1>Ejemplo cambiar nombre</h1>
          <h2>{this.state.name}</h2>
          <button onClick={this.changeName}>Cambiar el nombre</button>
      </div>
    )
  }
}
