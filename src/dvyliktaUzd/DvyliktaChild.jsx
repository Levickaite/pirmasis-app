import dvyliktaCss from './dvyliktaCss.css'
const DvyliktaChild=(props)=>{
    return (
    <table>
        <thead>
        <tr>
            <th>Žodis</th>
            <th>Žodžio ilgis</th>
            
        </tr>
        </thead>
        <tbody>
        
            {props.masyvas.map((zodis, index)=>(
                <tr>
                <td>{zodis}</td>
                <td>{zodis.length}</td>
                </tr>
            ))}
            
        
        </tbody>
    </table>
    )
}
export default DvyliktaChild