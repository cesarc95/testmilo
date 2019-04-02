import React, { PureComponent, createRef, Fragment  } from 'react'
import { Button, Popup } from 'semantic-ui-react'

const style = {
  borderRadius: 0,
  opacity: 0.7,
  padding: '2em',
}

class personasDetail extends PureComponent {
  state = {
    persona: {}
}


componentWillReceiveProps(newProps) {
    console.log(newProps);
   
        const personaID = this.props.match.params.personaID;
        axios.get(`https://rickandmortyapi.com/api/character/${persona.id}/`)
            .then(res => {
                this.setState({
                    article: res.data
                });

            })
    
    return (


<a target="_blank" >
  <div className="thecard">
    <div className="card-img">
      <img src={personaje.image} />
    </div>
    <div className="card-caption">
      
      <h1>{personaje.name}</h1>
      
      <p>{personaje.origin.name}</p>
    </div>
   
    <Fragment>
        <Button content='Open controlled Popup' onClick={this.toggle} />
        <Popup
          context={this.contextRef}
          content='Hello'
          position='top center'
          open={this.state.open}
        />
        
        <strong ref={this.contextRef}></strong>
      </Fragment>
   
  </div>
</a>

    )
  }
}

export default personasDetail
