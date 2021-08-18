import React from 'react'

const Notice = ({ notice }) => {
    return (
        <div>
            <h4>{notice.title}</h4>
            <p>Ilmoituksen tyyppi: {notice.rfoType}</p>
            <p>Luotu {notice.created}</p>
        </div>
    )
}

export default Notice