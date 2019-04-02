import React, { PureComponent, createRef  } from 'react'




class Personaje extends PureComponent {
  state = {}
  contextRef = createRef()

  toggle = () => this.setState({ open: !this.state.open })
  
  render() {
    const { personaje } = this.props

    return (


<a target="" href={`/character/1`}>
  <div className="thecard">
    <div className="card-img">
      <img src={personaje.image} 
      
      />
    </div>
    <div className="card-caption">
      
      <h1>{personaje.name}</h1>
      
      <p>{personaje.origin.name}</p>
    </div>

   
  </div>
</a>

    )
  }
}

export default Personaje
