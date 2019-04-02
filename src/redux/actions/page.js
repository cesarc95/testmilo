import {
    GET_PERSONAJES_REQUEST,
    GET_PERSONAJES_SUCCESS,
    GET_PERSONAJES_FAIL,
    SET_PERSONAJES,
    FILTER_PERSONAJE
  } from '../constants/page'
  
  
  function setPersonajes(data) {
    const personajes = data.results.map(personaje => {
      let { url } = personaje
      personaje.id = url.substring(34, url.length - 1)
      personaje.name = personaje.name.charAt(0).toUpperCase() + personaje.name.slice(1)
      return personaje
    })
  
    return {
      type: SET_PERSONAJES,
      payload: personajes
    }
  }
  
  export function getPersonajes() {
    return dispatch => {
      dispatch({
        type: GET_PERSONAJES_REQUEST
      })
  
      return fetch(`https://rickandmortyapi.com/api/character/?name`)
        .then(response => {
          if (response.ok) {
            return response.json()
          }
  
          throw new Error(`${response.status}: ${response.statusText}`)
        })
        .then(data => {
          dispatch({
            type: GET_PERSONAJES_SUCCESS
          })
          dispatch(setPersonajes(data))
          dispatch(filterPersonajes())
        })
        .catch(error => {
          dispatch({
            type: GET_PERSONAJES_FAIL,
            payload: error.message
          })
        })
    }
  }
  
  export function filterPersonajes(searchString = '') {
    return (dispatch, getState) => {
      const displayedPersonajes = getState().page.personajes.filter(personaje => {
        return personaje.name.toLowerCase().includes(searchString.toLowerCase())
      })
  
      dispatch({
        type: FILTER_PERSONAJE,
        payload: displayedPersonajes
      })
    }
  }
  