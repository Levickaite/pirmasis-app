import logo from './logo.svg';
import './App.css';
import Komp7 from './pirmiejiKomponentai/Komp7.jsx';
import Komp8 from './pirmiejiKomponentai/Komp8.jsx';
import Komp9 from './pirmiejiKomponentai/Komp9.jsx';
import TreciaUzduotis from './treciaUzd/treciaUzd.jsx';
import KetvirtaUzdduotis from './ketvirtaUzd/ketvirtaUzd.jsx'
import PenktaUzduotis from './penktaUzd/penktauzd.jsx'
import SestaUzduotis from './sestaUzd/sestaUzd.jsx';
import SeptintaUzduotis from './septintauzd/septintaUzd.jsx';
import AstuntaUzduotis from './astuntaUzd/astuntaUzd.jsx';
import DevintaUzduotis from './devintaUzd/devintaUzd.jsx'
import DesimtaUzduotis from './desimtaUzd/desimtaUzd.jsx'
import Knygynas from './vienuoliktaUzd/Knygynas.jsx';
import DvyliktaUzduotis from './dvyliktaUzd/dvyliktaUzd.jsx'


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
        <TreciaUzduotis/>
        <KetvirtaUzdduotis/>
        <PenktaUzduotis/>
        <SestaUzduotis/>
        <SeptintaUzduotis/>
        <AstuntaUzduotis/>
        <DevintaUzduotis/>
        <DesimtaUzduotis/>
        <Knygynas/>
        <DvyliktaUzduotis/>
      </header>
    </div>
  );
}

export default App;

function Komponentas4(){
  return(
    <div className='komp4'>
      <p>
        4to komponento tekstas
      </p>
    </div>
  )
}
function Komponentas5(){
  console.log(Komponentas5);
  
  return(
    <div className='komp5'>
      <h2>5to komponento antraštė</h2>
      <ul>
        <li>Vienas</li>
        <li>Du</li>
        <li>Trys</li>
        <li>Keturi</li>
      </ul>
    </div>
    )
}

function Komponentas6(){
  return(
    <div className='komp6'>
    <h2>6to komponento antraštė</h2>
    <p>Kažkoks 6to komponento tekstas</p>
    </div>
  )
}

