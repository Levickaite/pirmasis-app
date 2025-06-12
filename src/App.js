import logo from './logo.svg';
import './App.css';
import Komp7 from './Komp7';
import Komp8 from './Komp8';
import Komp9 from './Komp9';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Komponentas4/>
        <Komponentas5/>
        <Komponentas6/>
        <Komp7/>
        <Komp8/>
        <Komp9/>

      </header>
    </div>
  );
}

export default App;

function Komponentas4(){
  return(
    <p>
      4to komponento tekstas
    </p>
  )
}
function Komponentas5(){
  console.log(Komponentas5);
  
  return(
    <>
      <h2>5to komponento antraštė</h2>
      <ul>
        <li>Vienas</li>
        <li>Du</li>
        <li>Trys</li>
        <li>Keturi</li>
      </ul>
    </>
    )
}

function Komponentas6(){
  return(
    <>
    <h2>6to komponento antraštė</h2>
    <p>Kažkoks 6to komponento tekstas</p>
    </>
  )
}

