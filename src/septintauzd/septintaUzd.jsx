const SeptintaUzduotis=()=>{
    const skaiciai = [65,-5,78,-32,-550,23,6,-7]
    return (
        <div className="septintaUzduotis">
            <h5>Septinta užduotis</h5>
            <ul>
                {skaiciai.map((skaicius)=>
                <li>
                    {skaicius} - {skaicius>0? "teigiamas":(skaicius<0? "neigiamas":"nulis")}
                </li>)}
            </ul>
        </div>
    )
}
export default SeptintaUzduotis