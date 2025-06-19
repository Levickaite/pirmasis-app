import DvyliktaChild from './DvyliktaChild.jsx'
const DvyliktaUzduotis=()=>{
    const zodziuMasyvas1=["Kėdė","Stalas","Lempa"]
    const zodziuMasyvas2=["Arbata","Puodelis","Šaukštelis"]
    return (
        <div className="masyvai">
            <h5>Pirmas žodžių masyvas</h5>
            <DvyliktaChild masyvas={zodziuMasyvas1}/>
            <h5>Antras žodžių masyvas</h5>
            <DvyliktaChild masyvas={zodziuMasyvas2}/>
        </div>
    )
}
export default DvyliktaUzduotis