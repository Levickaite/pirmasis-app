import React from 'react'
import KeturioliktaCss from './keturiolikta.css'
import NavbarLinks from './NavbarLinks'
import NavbarHeader from './NavbarHeader'
// susikurkite css failą ir jį prijunkite
// sustiliuokite taip, kad turėtumėte navigacijos juostą, kur po kaire būtų
// tinklalapio pavadinimas ir po dešine, horizontaliai einančios nuorodos

const Navbar = () => {
  let navbarData = {
    header_text: 'Projektas ABC',
    links: [
        { id: 1, url: '/', title: 'Pradžia' },
        { id: 2, url: '/paslaugos', title: 'Paslaugos' },
        { id: 3, url: '/projektai', title: 'Projektai' },
        { id: 4, url: '/apie-mus', title: 'Apie mus' },
        { id: 5, url: '/kontaktai', title: 'Kontaktai' },
    ]
  }

  return (
    <nav className='navigacija'>
        <div className='navBarPavadinimas'>
          <NavbarHeader title={navbarData.header_text}/>
        </div>
        <div className='sarasas14'>
          <NavbarLinks links ={navbarData.links}/>
        </div>
    </nav>
  )
}

export default Navbar