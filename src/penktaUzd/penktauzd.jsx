import penkta from './penktaUzd/penkta.css'
const PenktaUzduotis=()=>{
    const a = 68
    const b =31
    const c = 69
    const kurisDidziausias= ()=>{
        return Math.max(a,b,c)
    }
    const kurisMaziausias=()=>{
        return Math.min(a,b,c)
    }
    const skaiciuVidurkis=()=>{
        return (a+b+c)/3
    } 
    return (
        <div className="penktaUzduotis">
        <h5>Duotis skaičiai: </h5>
        <p>{a}, {b}, {c}</p>
        <p>Didžiausias skaičius: {kurisDidziausias()}</p>
        <p>Mažiausias skaičius: {kurisMaziausias()}</p>
        <p>Skaičiu vidurkis: {skaiciuVidurkis().toFixed(2)}</p>
        </div>
    )
    }



export default PenktaUzduotis