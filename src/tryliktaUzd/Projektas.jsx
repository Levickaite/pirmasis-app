import React from 'react'

// padarykite kad šis komponentas priimtų props (vieno projekto objektą)
const Projektas = (props) => {
  // išveskite visą turimą projekto informaciją
  return (
    <>
    <div>Projektas</div>
    <h5>{props.pavadinimas}</h5>
    <p>Tipas: {props.tipas}; Data: {props.atlikimo_data}</p>
    </>
  )
}

export default Projektas