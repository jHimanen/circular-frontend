import React, { useState, useEffect } from 'react'
import Building from './components/Building'
import Material from './components/Material'
import Detailed from './components/Detailed'
import buildingService from './services/buildings'
import materialService from './services/materials'
import './App.css'

const App = () => {
  const [buildings, setBuildings] = useState([])
  const [materials, setMaterials] = useState([])
  const [detailed, setDetailed] = useState({})

  useEffect(() => {
    buildingService.getAll().then(buildings => 
      setBuildings( buildings )
    )
    materialService.getAll().then(materials =>
      setMaterials( materials )
    )
  }, [])

  const chooseDetailed = (id) => {
    const chosen = materials.find(material => material.id === id)
    setDetailed(chosen)
  }

  return (
    <div>
      
      <div>
        <h2>Selaa kohteita ja materiaaleja</h2>
      </div>

      <div>
        <h3>Kohteet</h3>
      </div>

      <div className='container'>
        {buildings.map(building =>
          <Building key={building.id} building={building} />)}
      </div>

      <div>
        <h3>Materiaalit</h3>
      </div>

      <div className='container'>
        {materials.map(material =>
          <div key={material.id} onClick={() => chooseDetailed(material.id)}>
            <Material material={material} />
          </div>
        )}
      </div>

      <div><Detailed material={detailed}/></div>

      {Object.keys(detailed).length === 0
        ? null
        : <button onClick={() => setDetailed({})}>Piilota</button>
      }

    </div>
  );
}

export default App;
