import React from "react";
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

    return (
        <div className="studentai">
            <h5>Studentai:</h5>
            <p>{studentas1.vardas} ({studentas1.amzius}): {studentas1.pazymiai.join(', ')}</p>
            <p>{studentas2.vardas} ({studentas2.amzius}): {studentas2.pazymiai.join(', ')}</p>
            <div className="vyresnis">
                <p>Vyrenis studentas: {kurisVyresnis}</p>
            </div>
        </div>
    )
}
export default KetvirtaUzduotis