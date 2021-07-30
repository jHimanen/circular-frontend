import React from 'react'

const Detailed = ({ material }) => {
    return (
        <div>
            <p>{material.Title}</p>
            <p>{material.Description}</p>
            <p>{material.Usage}</p>
            <p>{material.ThermalConductivity}</p>
        </div>
    )
}

export default Detailed