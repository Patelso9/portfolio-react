import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Repo from './components/Repo';


function App() {

  // ------ Github Repo Search -------//
  const [repo, setRepo] = useState([])
  const [search, setSearch] = useState('')

  useEffect(()=> {
    axios.get('https://api.github.com/users/Patelso9/repos')
    .then(res => {
      setRepo(res.data);
    })
    .catch(err => console.log(err))
  }, [])

  const handleChange = e => {
    setSearch(e.target.value)
  }

  const filteredRepo = repo.filter(repos =>
    repos.name.toLowerCase().includes(search.toLowerCase))


  //---------- HTML -----------//
  return (
    <div className="profile-App">
      <div className="repo-App">
          <div className="repo-name">
              <h1 className="repo-text">Search for a repository</h1>
              <form>
                <input 
                  type="text" 
                  placeholder="search for a repository" 
                  className="repo-input" 
                  onChange={handleChange}
                />
              </form>
          </div>
          {filteredRepo.map(repos => {
              return <Repo
                  name={repos.name}
                  html_url={repos.html_url}
                  language={repos.language}
              />
          })}  
      </div>
    </div>
  )

}

export default App;
