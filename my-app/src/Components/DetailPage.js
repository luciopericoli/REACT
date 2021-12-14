import React, { useState, useEffect } from 'react'
import { Link,
  useParams
} from 'react-router-dom'



function DetailPage(props) {
    
    const { id } = useParams();
    //remove the : from the id
    const idNumber = id.replace(':','');
    
    useEffect(() => {
        fetch (`https://rickandmortyapi.com/api/character/${idNumber}`)
          .then(response => response.json())
          .then(data => {
        setPersonaje(data)
        console.log(data)
    })
        return () => {
            setPersonaje(null)
        }
    }, [])
    

    const [personaje, setPersonaje] = useState({})
    
    return (
        <div className="card">
        <div className="card-header">
          <div className="profile">
            <span className="letter"><Link to={`/status/${personaje.status}`}>{personaje.status}</Link></span>
          </div>
          <div className="card-title-group">
          
            <h5 className="card-title"   ><Link to={`/personaje/${personaje.id}`}>{personaje.name}</Link></h5>
            
            
    
            <div className="card-date">{personaje.species}</div>
          </div>
        </div>
        <div className='w-50 justify-content-center'>
        <img className="card-image" src={personaje.image} alt="Logo" />
        </div>
      </div>
    )
}



export default DetailPage;