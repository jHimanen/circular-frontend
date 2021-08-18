import React, { useState, useEffect } from 'react'
import Material from './components/Material'
import Detailed from './components/Detailed'
import Article from './components/Article'
import materialService from './services/materials'
import articleService from './services/articles'
import noticeService from './services/notices'
import './App.css'

const App = () => {
  const [materials, setMaterials] = useState([])
  const [detailed, setDetailed] = useState({})
  const [articles, setArticles] = useState([])

  useEffect(() => {
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

  return (
    <div>
      
      <div>
        <h1>Selaa ilmoituksia ja materiaaleja</h1>
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

      <h2>Uutiset</h2>

      <div>
        {articles.map(article => 
            <Article key={article.id} article={article} />
        )}
      </div>

    </div>
  );
}

export default App;
