import logo from './logo.svg';
import './App.css';
import Komp7 from './pirmieji komponentai/Komp7';
import Komp8 from './pirmieji komponentai/Komp8';
import Komp9 from './pirmieji komponentai/Komp9';
import TreciaUzduotis from './treciaUzd/treciaUzd.jsx';
import KetvirtaUzdduotis from './ketvirtaUzd/ketvirtaUzd.jsx'
import PenktaUzduotis from './penktaUzd/penktauzd.jsx'
import SestaUzduotis from './sestaUzd/sestaUzd.jsx';
import SeptintaUzduotis from './septintauzd/septintaUzd.jsx';
import AstuntaUzduotis from './astuntaUzd/astuntaUzd.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Komponentas4/>
        <Komponentas5/>
        <Komponentas6/>
        <Komp7/>
        <Komp8/>
        <Komp9/> */}
        <TreciaUzduotis/>
        <KetvirtaUzdduotis/>
        <PenktaUzduotis/>
        <SestaUzduotis/>
        <SeptintaUzduotis/>
        <AstuntaUzduotis/>
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

