import React, { useState, useEffect } from 'react'
import Material from './components/Material'
import Detailed from './components/Detailed'
import Article from './components/Article'
import Notice from './components/Notice'
import LoginForm from './components/LoginForm'
import materialService from './services/materials'
import articleService from './services/articles'
import noticeService from './services/notices'
import loginService from './services/login'
import './App.css'

const App = () => {
  const [materials, setMaterials] = useState([])
  const [detailed, setDetailed] = useState({})
  const [articles, setArticles] = useState([])
  const [notices, setNotices] = useState([])
  const [user, setUser] = useState(null)

  useEffect(() => {
    noticeService.getAll().then(notices =>
      setNotices( notices.slice(0, 3) )  
    )
    materialService.getAll().then(materials =>
      setMaterials( materials )
    )
    articleService.getAll().then(articles =>
      setArticles( articles.slice(0, 5) )
    )
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
    }
  }, [])

  const chooseDetailed = (id) => {
    const chosen = materials.find(material => material.id === id)
    setDetailed(chosen)
  }

  const handleLogin = async (credentials) => {
    try {
      const user = await loginService.login(credentials)
      console.log('Logging in with', credentials.identifier, credentials.password)

      window.localStorage.setItem(
        'loggedUser', JSON.stringify(user)
      )

      setUser(user)

    } catch (error) {
      console.log(error.message)
    }
  }

  const handleLogout = (event) => {
    event.preventDefault()
    console.log('logging out', user.user.username)
    window.localStorage.clear()
    setUser(null)
  }

  return (
    <div>

      {user === null
        ? (
          <div>
            <LoginForm login={handleLogin} />
          </div>)
        : <button onClick={handleLogout}>Logout</button>
      }
      
      <div>
        <h1>Selaa ilmoituksia ja materiaaleja</h1>
      </div>

      <div>
        <h2>Ilmoitukset</h2>
      </div>

      <div>
        {notices.map(notice =>
          <Notice key={notice.id} notice={notice} />  
        )}
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
