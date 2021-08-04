import React from 'react'

const Detailed = ({ material }) => {
    return (
        <div>
            <p>Materiaali: {material.Title}</p>
            <p>Kuvaus: {material.Description}</p>
            <p>Käyttö: {material.Usage}</p>
            <p>Lämmönjohtavuus: {material.ThermalConductivity}</p>
        </div>
    )
}

export default Detailed