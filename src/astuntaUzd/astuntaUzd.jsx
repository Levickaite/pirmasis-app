const AstuntaUzduotis=()=>{
    const prekiuMasyvas=[
        {id: 1, kodas: "001", pavadinimas: "Stalas", kaina: 75, savikaina: 45, kiekis: 5},
        {id: 2, kodas: "002", pavadinimas: "Kėdė", kaina: 30, savikaina: 20, kiekis: 7},
        {id: 3, kodas: "003", pavadinimas: "Lentyna", kaina: 20, savikaina: 15, kiekis: 4},
        
    ]
    const brangiausiaPreke=()=>{
        let brangiausia =prekiuMasyvas[0]
        for (let i = 1; i < prekiuMasyvas.length; i++) {
            if (prekiuMasyvas[i].kaina>brangiausia.kaina)
            brangiausia = prekiuMasyvas[i];
            
        }
        return brangiausia
    }
   
    const pigiausiaPreke=()=>{
        let pigiausia =prekiuMasyvas[0]
        for (let i = 1; i < prekiuMasyvas.length; i++) {
            if(prekiuMasyvas[i].kaina<pigiausia.kaina)
            pigiausia = prekiuMasyvas[i];
            
        }
        return pigiausia
    }
    const kainuVidurkis=()=>{
        let kainuSuma = 0;
        for (let i = 0; i < prekiuMasyvas.length; i++) {
            kainuSuma += prekiuMasyvas[i].kaina
            
        }
        return (kainuSuma/prekiuMasyvas.length).toFixed(2)
    }
    const pelnas=(preke)=>{
        return (preke.kaina-preke.savikaina)*preke.kiekis
    }
    return (
        <div className="prekes">
            <h5>Prekės</h5>
            <ul>
                {prekiuMasyvas.map((preke)=>{
                    return(
                    <li>
                        {preke.pavadinimas} - Kaina: {preke.kaina}eur, Savikaina: {preke.savikaina}eur, Kiekis: {preke.kiekis} vnt., Galimas pelnas: {pelnas(preke)}eur.
                    </li>
                    )
                })}
            </ul>
            <p>Brangiausia prekė: {brangiausiaPreke().pavadinimas} {brangiausiaPreke().kaina}eur</p>
            <p>Pigiausia prekė: {pigiausiaPreke().pavadinimas} {pigiausiaPreke().kaina}eur</p>
            <p>Prekių kainų vidurkis: {kainuVidurkis()}eur</p>
        </div>
    )
}

export default AstuntaUzduotis