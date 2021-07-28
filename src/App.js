import React, { useState } from 'react'
import Building from './components/Building'
import buildingService from './services/buildings'

const App = () => {
  const [buildings, setBuildings] = useState([])

  const fetchBuildings = () => {
    buildingService.getAll().then(buildings =>
      setBuildings(buildings)
    )
  }

  return (
    <div>
      <button onClick={fetchBuildings}>Fetch building data</button>

      <div>
        {buildings.map(building =>
          <Building key={building.id} building={building} />)}
      </div>
    </div>
  );
}

export default App;
