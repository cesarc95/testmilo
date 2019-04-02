import {
    GET_PERSONAJES_REQUEST,
    GET_PERSONAJES_SUCCESS,
    GET_PERSONAJES_FAIL,
    SET_PERSONAJES,
    FILTER_PERSONAJE
  } from '../constants/page'
  
  
  const initialState = {
    isFetched: false,
    error: null,
    personajes: [],
    displayedPersonajes: []
  }
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_PERSONAJES_REQUEST:
        return {
          ...state,
          isFetched: true
        }
  
      case GET_PERSONAJES_SUCCESS:
        return {
          ...state,
          isFetched: false
        }
  
      case GET_PERSONAJES_FAIL:
        return {
          ...state,
          isFetched: false,
          error: action.payload
        }
  
      case SET_PERSONAJES:
        return {
          ...state,
          personajes: action.payload
        }
  
      case FILTER_PERSONAJE:
        return {
          ...state,
          displayedPersonajes: action.payload
        }
  
      default:
        return state
    }
  }
  