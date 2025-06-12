import React from 'react'

const Komp7 = () => {
  const masyvas = ['kėdė','stalas','langas','durys']

  return (
    <div className='septintasMasyvas'>
      <h2>7to komponento masyvas</h2>
      <div className='masyvoElementai'>
        {masyvas.map((e, index)=>{
          return <p key={index}>{e}</p>
        })}
      </div>
    </div>
  )
}

export default Komp7