import React from 'react';
import './Repo.css'

const Repo = ({ name, html_url, language, description, deployed }) => {
    return (
        <div className="Proj-container">
            <div className="proj-row">
                <div className="proj">
                    <h4>{name}</h4>
                    <h3>{description}</h3>
                    <p>Language Used: {language}</p>
                    <a href={html_url}>Repo Link - </a>
                    <a href={deployed}>Deployed Link</a>
                </div>
            </div>
        </div>
    )
}

export default Repo
