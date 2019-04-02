import React from 'react'

const Search = ({ onChange }) => (
  // <input
  //   type="text"
  //   onChange={onChange}
  //   placeholder="Ingresa el nombre de un personaje"
  //   autoFocus
  // />


<div className="flexbox">
  <div className="search">
    <h1>Personajes Rick And Morty</h1>
   
    <div>
      <input type="text" 
      onChange={onChange}
      placeholder="Ingresa el nombre de un personaje" required
      />
    </div>
  </div>
</div>

)

export default Search
