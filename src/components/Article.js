import React from 'react'

const Article = ({ article }) => {
    return (
        <div>
            <h4>{article.Title}</h4>
            <p>{article.Description}</p>
        </div>
    )
}

export default Article