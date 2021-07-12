// import React from 'react'
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Repo from '../Repo/Repo';

const Github = () => {
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
    repos.name.includes(search))


    return (
        <div className= "repo-github" >
         <div className="repo-name">
            <h2>GitHub Portfolio</h2>
              <h3 className="repo-text">Search my Github respository</h3>
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
                  key={repos.id}
                  name={repos.name}
                  language={repos.language}
                  html_url={repos.html_url}
              />
          })}    
        </div>
    )
}

export default Github
