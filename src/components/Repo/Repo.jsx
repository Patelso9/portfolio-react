import React from 'react';
import './Repo.css'

const Repo = ({ name, html_url, language }) => {
    return (
        <div className="Proj-container">
            <div className="proj-row">
                <div className="proj">
                    <h1>{name}</h1>
                    <p>{language}</p>
                    <p>{html_url}</p>
                </div>
            </div>
        </div>
    )
}

export default Repo
