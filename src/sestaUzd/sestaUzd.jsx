const SestaUzduotis=()=>{
    const skaiciuMasyvas = [65,1,656,7,96,54]
    const visiSkaiciai =()=>{
        return skaiciuMasyvas.join(', ')
    }
    const skaiciuVidurkis=()=>{
        let suma = 0
        for (let i = 0; i < skaiciuMasyvas.length; i++) {
            suma += skaiciuMasyvas[i];
            
        }
        return (suma/skaiciuMasyvas.length.toFixed(2))
    }
    const didziausiasSkaicius=()=>{
        return Math.max(...skaiciuMasyvas)
    }
    const lyginiai=()=>{
        const atrinktiLyginiai = [];
        for (let skaicius of skaiciuMasyvas) {
            if (skaicius %2==0){
                atrinktiLyginiai.push(skaicius)
            }
        }
        return atrinktiLyginiai.join(', ')
    }
    return (
        <div className="sestauzd">
            <h5>Šeštos užduoties skaičių masyvas:</h5>
            <p>{visiSkaiciai()}</p>
            <p>Skaičių vidurkis: {skaiciuVidurkis()}</p>
            <p>Didžiausias skaičius: {didziausiasSkaicius()}</p>
            <p>Lyginiai skaičiai: {lyginiai()}</p>
        </div>
    )
}
export default SestaUzduotis