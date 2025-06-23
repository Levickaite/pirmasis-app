import React from 'react'

// padarykite kad šis komponentas priimtų reikiamą informaciją
const NavbarHeader = (props) => {
  // gautą informaciją išveskite h1 dalyje
  return (
    <h1>{props.title}</h1>
  )
}

export default NavbarHeader