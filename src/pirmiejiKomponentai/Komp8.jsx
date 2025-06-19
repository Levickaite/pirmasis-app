import React from 'react'
import './Komp8.css';
import komp8css from './pirmiejiKomponentai/komp8.css'

const Komp8 = () => {
  let preke = {
    kodas: 'BAK364',
    pavadinimas: 'Tusinukas',
    kaina: 2.34,
    savikaina: 1.50,
    nuotrauka: 'https://printplius.lt/119907-large_default/ballpoint-pen-forpus-air-blue-07-mm.jpg'}

  // šiame komponente jau turite prekės objektą
  // jį atvaizduokite return dalyje,
  // susikurkite visas reikiamas žymas, kad tą informaciją
  // būtų galima susidėti kažkaip tvarkingai ir aiškiai

  // taip pat, atlikite kažkiek stiliavimo, tam reikės
  // susikurti css failą ir jį prijungti prie šio komponento
  // ir atlikti stiliavims (pvz, blokelio spalva, tarpai, ...)
  
  return (
    <div className='prekesKortele'>
      <img src={preke.nuotrauka}/>
      <h2>{preke.pavadinimas}</h2>
      <p>Prekės kodas: {preke.kodas}</p>
      <p>Prekės kaina: {preke.kaina}</p>
      <p>Savikaina: {preke.savikaina}eur</p>
    </div>
  )
}

export default Komp8