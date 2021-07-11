import React from 'react'
import RepoProj from './RepoProj'

const Repo = () => {

    const [repo, setRepo] = useState([])
    const [search, setSearch] = useState('')
  
    useEffect(()=> {
      axios.get('https://api.github.com/users/Patelso9/repos')
      .them(res => {
        setRepo(res.data);
      }).catch(err => console.log(err))
    }, [])
  
    const handleChange = e => {
      setSearch(e.target.value)
    }
  
    const filteredRepo = repo.filter(repo =>
      repo.name.includes(search))

    return (
        <div className="repo-App">
            <div className="repo-name">
                <h1 className="repo-text">Search for a repository</h1>
                <form type="text" 
                    placeholder="search for a repository" 
                    className="repo-input" 
                    onChange={handleChange}
                />
            </div>
            {filteredRepo.map(repo => {
                return <RepoProj
                    name={repo.name}
                    name={repo.html_url}
                    name={repo.language}
                />
            })}
            
        </div>
    )
}

export default Repo
