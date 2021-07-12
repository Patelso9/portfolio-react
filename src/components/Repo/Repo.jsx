import React from 'react';
import './Repo.css'

const Repo = ({ name, html_url, language }) => {
    return (
        <div className="Proj-container">
            <div className="proj-row">
                <div className="proj">
                    <h4><a href={html_url}>{name}</a></h4>
                    <p>Language Used: {language}</p>
                </div>
            </div>
        </div>
    )
}

export default Repo
