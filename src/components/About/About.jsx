import React from 'react'
import './About.css'
import proPic from './Sonali.jpg';

const About = () => {

    // const [git, setGit] = useState([])


    return (
        <div>
            <h2>About Me</h2>
            <div className="about"> 
                <img 
                    src={proPic} 
                    alt="Sonali">
                </img>
                <div>
                    <h4 className="skill-name">Who is @Patelso9?</h4>
                    <p>Front end Web Developer leveraging background in packaging sciences and project management to provide a unique perspective on how end-users interact with websites and software platforms. Earned a certificate in Full Stack Web Development from Rutgers University Coding Bootcamp. Innovative problem solver who is passionate about developing applications with a focus on building collaborative applications to enhance organization. Strengths in creativity, teamwork, and building projects from concept through commercialization.</p>
                </div>
            </div>

            <div className= "skills">
            <h2>Skills</h2>
                <ol>
                    <li> <div className="skill-name">JavaScript</div> 
                        : Majority of the recent projects have been coded using JavaScript.
                    </li>
                    <li> <div className="skill-name">HTML</div> 
                        : As this is the standard markup language for all documents desplayed on a web browser, it has been my first and favorite language to use. I have been playing with HTML for years. I have a project in my portfolio created using only HTML
                    </li>
                    <li> <div className="skill-name"> CSS</div>
                        : Has been one of the most challenging, but interesting languages to learn. Styling a page is very important for user experience and user marketing.
                    </li>
                    <li> <div className="skill-name"> React.js</div>
                        : I created a personal portfolio using React.js. I look forward to creating more projects with this language.
                    </li>
                    <li> <div className="skill-name">JQuery</div> 
                        : Has made life much more simple as a fullstack developer. JQuery has helped cut down the amount of code I write wihle using JavaScript
                    </li>
                </ol>
            </div>

        </div>
    )
}

export default About;
