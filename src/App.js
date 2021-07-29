import React, { useState, useEffect } from 'react'
import Building from './components/Building'
import Material from './components/Material'
import buildingService from './services/buildings'
import materialService from './services/materials'
import './App.css'

const App = () => {
  const [buildings, setBuildings] = useState([])
  const [materials, setMaterials] = useState([])

  useEffect(() => {
    buildingService.getAll().then(buildings => 
      setBuildings( buildings )
    )
    materialService.getAll().then(materials =>
      setMaterials( materials )
    )
  }, [])

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
          <Material key={material.id} material={material} />)}
      </div>
    </div>
  );
}

export default App;
