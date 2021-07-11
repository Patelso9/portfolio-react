import React from 'react'

const RepoProj = ({ name, html_url, language }) => {
    return (
        <div className="Proj-container">
            <div className="proj-row">
                <div className="proj">
                    <h1 className="proj-name">{name}</h1>
                    <p className="proj-langiage">{language}</p>
                    <p className="proj-url">{html_url}</p>
                </div>
            </div>
        </div>
    )
}

export default RepoProj

