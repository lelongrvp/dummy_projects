import React, { useState } from 'react'
import './Cell.css'

const Cells = ({cellType, black, white}) => {
    const [type, setType] = useState(cellType)
    const handleClick = () => {
        if(type == 'black'){
            setType('white')
        } else {
            setType('black')
        }
    }
    
    if(type == 'black'){
        return(
            <div className="black" style={{backgroundColor: black}} onClick={() => {handleClick()}}></div>
        )
    }
    else {
        return(
            <div className="white" style={{backgroundColor: white}} onClick={() => {handleClick()}}></div>
        )
    }
}

export default Cells