import React from 'react'
import './Notice.css'

const Notice = ({ notice }) => {
    return (
        <div className='noticebox'>
            <h4 className='titlebox'>{notice.title}</h4>
            <p>Ilmoituksen tyyppi: {notice.rfoType}</p>
            <p>Luotu {notice.created}</p>
        </div>
    )
}

export default Notice