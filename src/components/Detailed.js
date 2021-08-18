import React from 'react'

const Detailed = ({ material }) => {

    const displayWaste = () => {
        if (material.isWaste) {
            return 'Tämä on jätemateriaalia.'
        } else {
            return 'Tämä ei ole jätemateriaalia.'
        }
    }
    
    return (
        <div>
            <p>Materiaali: {material.classification}</p>
            <p>Kuvaus: {material.description}</p>
            <p>Tyyppi: {material.type}</p>
            <p>{displayWaste()}</p>
        </div>
    )
}

export default Detailed