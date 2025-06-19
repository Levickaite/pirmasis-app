import React from 'react'
import Knyga from './Knyga'

const Knygynas = () => {
  // susikurkite tris atskirus knygų objektus
  // su informacija

  // kvieskite komponentą Knyga kelis kartus,
  // kiekvieną kartą perduodant skirtingus
  // knygų objektus
  return (
    <div>
      <h5>Knygynas</h5>
      <Knyga pavadinimas= '"Vilko valanda"' kaina = {31} />
      <Knyga pavadinimas= '"Moterys"' kaina = {20} />
      <Knyga pavadinimas= '"Arklienos kumpis"' kaina = {7} />
    </div>
  )
}

export default Knygynas