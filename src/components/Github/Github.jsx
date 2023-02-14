// import React from 'react'
import React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import Repo from '../Repo/Repo';

import './Github.css';
import fliqs from './flicks-and-liqs.png';

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
            <h3 className="repo-fav"> --- Repository Highlights --- </h3>

            <div className="repo-fav-block">
            <Container>
              <Row className='proj-fav'>
                <Col className='proj1 proj'> 
                  <h4>Turnt off Tea</h4>
                  {/* <img src={fliqs} alt="project 1"/> */}
                  <p>There are so many things we can learn and focus our time on. Come join me on my adventures and get turnt off the tea I spill.</p>
                </Col>
                <Col className='proj2 proj'>
                  <h4>Wedding RSVP</h4>
                  {/* <img src={fliqs} alt="project 1"/> */}
                  <p>Are you looking for a way to gather your wedding guest RSVPs? look no further.</p>
                </Col>
                <Col className='proj3 proj'>
                  <h4>Fliqs & Liqs</h4>
                  <img src={fliqs} alt="project 3"/>
                  <p>Looking for a date night idea? Here is a little app you can use when you need a drink & movie inspiration for your "Netflix & Chill" night.</p>
                </Col>
              </Row>
            </Container>
            </div>

              <h3 className="repo-text">Search my Github respository</h3>
              <form>
                <input 
                  type="text" 
                  placeholder="search for a repository" 
                  className="repo-input" 
                  onChange={handleChange}
                />
              </form>
          <hr/>
          </div>
          {filteredRepo.map(repos => {
              return <Repo
                  key={repos.id}
                  name={repos.name}
                  language={repos.language}
                  description={repos.description}
                  html_url={repos.html_url}
                  deployed={repos.homepage}
              />
          })}    
        </div>
    )
}

export default Github
