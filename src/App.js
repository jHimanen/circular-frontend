import React, { useState, useEffect } from 'react'
import Building from './components/Building'
import Material from './components/Material'
import Detailed from './components/Detailed'
import Article from './components/Article'
import buildingService from './services/buildings'
import materialService from './services/materials'
import articleService from './services/articles'
import './App.css'

const App = () => {
  const [buildings, setBuildings] = useState([])
  const [materials, setMaterials] = useState([])
  const [detailed, setDetailed] = useState({})
  const [articles, setArticles] = useState([])

  useEffect(() => {
    buildingService.getAll().then(buildings => 
      setBuildings( buildings )
    )
    materialService.getAll().then(materials =>
      setMaterials( materials )
    )
    articleService.getAll().then(articles =>
      setArticles( articles )
    )
  }, [])

  const chooseDetailed = (id) => {
    const chosen = materials.find(material => material.id === id)
    setDetailed(chosen)
  }

  const getNews = () => {
    articles.map(article => article.id).forEach(id => {
      articleService.deleteOne(id)
    })

    articleService.getAll().then(articles =>
      setArticles( articles )
    )
  }

  return (
    <div>
      
      <div>
        <h1>Selaa kohteita ja materiaaleja</h1>
      </div>

      <div>
        <h2>Kohteet</h2>
      </div>

      <div className='container'>
        {buildings.map(building =>
          <Building key={building.id} building={building} />)}
      </div>

      <div>
        <h2>Materiaalit</h2>
      </div>

      <div className='container'>
        {materials.map(material =>
          <div key={material.id} onClick={() => chooseDetailed(material.id)}>
            <Material material={material} />
          </div>
        )}
      </div>

      {Object.keys(detailed).length === 0
        ? null
        : (<div>
            <Detailed material={detailed}/>
            <button onClick={() => setDetailed({})}>Piilota</button>
          </div>)
      }

      <div>
        <h2>Uutiset</h2>
        <button onClick={getNews}>Päivitä uutiset</button>
      </div>

      <div>
        {articles.map(article => 
            <Article key={article.id} article={article} />
        )}
      </div>

    </div>
  );
}

export default App;
