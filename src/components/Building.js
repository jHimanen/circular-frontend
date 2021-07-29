import React from 'react'
import './Building.css'

const Building = ({ building }) => {
    return (
        <div className='buildingbox'>
            <p className='titlebox'>{building.Name}</p>
            <p>{building.Location}</p>
        </div>
    )
}

export default Building