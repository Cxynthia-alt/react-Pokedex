import React from "react"
import "./Pokecard.css"

const Pokecard = ({ items }) => {
  return (
    <React.Fragment>
      <h2>Pokedex</h2>
      <div className="pokemon">
        {items.map(i => (
          <div key={i.id} className="pokemon-card">
            <h4 className="pokemon-name" >{i.name}</h4>
            <img className="pokemon-img" src={i.img} alt={i.name} width="150" />
            <p>Type: {i.type}</p>
            <p>EXP: {i.base_experience}</p>
          </div>
        ))}
      </div>
    </React.Fragment>


  )
}

export default Pokecard
