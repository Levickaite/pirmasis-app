import React from 'react'
import './paslauga.css'
function PaslaugosKomponentas(){
    return(
        <div className='paslaugos'>
            <h3>PASLAUGOS</h3>
            <div className='grid'>
                <div className='paslauga'>
                    <h5>Pirmoji paslauga</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, nesciunt.</p>
                </div>
                <div className='paslauga'>
                    <h5>Antroji paslauga</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, nesciunt.</p>
                </div>
                <div className='paslauga'>
                    <h5>Trečioji paslauga</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, nesciunt.</p>
                </div>
            </div>
        </div>

    )
}



export default PaslaugosKomponentas