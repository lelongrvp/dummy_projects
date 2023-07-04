import Cells from "./Cell";
import React from 'react'
import './Row.css'

const Rows = ({rowType, size, black, white}) => {
    const cells = []
    for (let i = 0; i < size; i++) {
        cells.push(i);
    }
    if(rowType == 'odd'){
        return(
            <div className="row">
                {
                    cells.map((cell) => {
                        return <Cells key={cell} cellType={cell % 2 == 0 ? `white`: `black`} white={white} black={black}/>
                    })
                }
            </div>
        )
    }
    else {
        return(
            <div className="row">
                {
                    cells.map((cell) => {
                        return <Cells key={cell} cellType={cell % 2 == 0 ? `black` : `white`} white={white} black={black}/>
                    })
                }
            </div>
        )
    }
}

export default Rows