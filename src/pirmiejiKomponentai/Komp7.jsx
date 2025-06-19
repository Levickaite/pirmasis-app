import React from 'react'
import komp7css from './pirmiejiKomponentai/komp7.css'

const Komp7 = () => {
  const masyvas = ['kėdė','stalas','langas','durys']

  return (
    <div className='septintasMasyvas'>
      <h2>7to komponento masyvas</h2>
      <div className='masyvoElementai'>
        {masyvas.map((e, )=>{
          return <p>{e}</p>
        })}
      </div>
    </div>
  )
}

export default Komp7