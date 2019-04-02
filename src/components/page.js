import React, { Component } from 'react'
import Personaje from './personaje'
import Search from '../components/search'

class Page extends Component {



  
  componentDidMount() {
    this.props.getPersonajes()
  }

  handleSearch(event) {
    this.props.filterPersonajes(event.currentTarget.value)
  }

  render() {
    let { displayedPersonajes, isFetched, error } = this.props

    let personajes = displayedPersonajes.map(personaje => {
      return (
        <li className="personajes__item" key={personaje.id}>
          <Personaje personaje={personaje} />
        </li>
      )
    })

    return (
      <div className="page">
        {error && <div className="page__error">{error}</div>}
        <div className="page__search">
          <Search onChange={this.handleSearch.bind(this)} />
        </div>
        {isFetched ? (
          <p>Cargando...</p>
        ) : (
          <ul className="personajes">{personajes}</ul>
        )}
      </div>
    )
  }
}

export default Page
