import React from 'react'

// priima props (knygos objektą)
const Knyga = (props) => {
  // išspausdina visą turimą apie knygą informaciją,
  // taip pat išveda "knyga brangi" jei jos kaina
  // yra didesnė nei 30 eurų, "knyga kainuoja vidutiniškai",
  // jei jos kaina yra tarp 10 ir 30 eurų, bei
  // "knyga pigi", jei jos kaina iki 10 eurų
  return (
    <div>
      <p>{props.pavadinimas}, kaina {props.kaina} ({props.kaina>30? "Knyga brangi": (props.kaina<10? "Knyga pigi": "Knyga kainuoja vidutiniškai")})</p>

    </div>
  )
}

export default Knyga