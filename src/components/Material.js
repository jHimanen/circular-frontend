import React from 'react'
import './Material.css'

const Material = ({ material }) => {
    return (
        <div className='materialbox'>
            <p className='titlebox'>{material.Title}</p>
            <p>{material.Description}</p>
        </div>
    )
}

export default Material