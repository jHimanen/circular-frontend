import React from 'react'
import './Material.css'

const Material = ({ material }) => {
    return (
        <div className='materialbox'>
            <p className='titlebox'>{material.classification}</p>
            <p>{material.description}</p>
        </div>
    )
}

export default Material