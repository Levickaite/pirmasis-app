import React from "react";
import ketvirta from './ketvirtaUzd/ketvirta.css'
const KetvirtaUzduotis=()=>{
    const studentas1 ={
        vardas: 'Jonas',
        amzius: 20,
        pazymiai: [5,9,7,6]
    }
    const studentas2 = {
        vardas: 'Petras',
        amzius: 23,
        pazymiai: [6,7,3,4]
    }
    const kurisVyresnis = studentas1.amzius>studentas2.amzius? studentas1.vardas : studentas2.vardas;
    
    const vidurkis = (pazymiai)=>{
        let suma = 0;
        for ( let i=0; i<pazymiai.length; i++){
            suma+= pazymiai[i]
        }
        return suma/pazymiai.length
    }
    const vidurkis1 =vidurkis(studentas1.pazymiai);
    const vidurkis2 = vidurkis(studentas2.pazymiai);
    const kurioVidurkisMazesnis = vidurkis1<vidurkis2? studentas1.vardas : studentas2.vardas
    return (
        <div className="studentai">
            <h5>Studentai:</h5>
            <p>{studentas1.vardas} ({studentas1.amzius}): {studentas1.pazymiai.join(', ')}</p>
            <p>{studentas2.vardas} ({studentas2.amzius}): {studentas2.pazymiai.join(', ')}</p>
            <div className="vyresnis">
                <p>Vyrenis studentas: {kurisVyresnis}</p>
            </div>
            <div className="vidurkis">
                <p>Mažesnis vidurkis yra pas: {kurioVidurkisMazesnis}</p>
            </div>
        </div>
    )
}
export default KetvirtaUzduotis