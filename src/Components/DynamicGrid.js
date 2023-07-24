import {useState, useRef, useEffect, React, createElement} from 'react'
import {NameCell, AnswerCell} from './Cell'

 function DynamicGrid(props){
    let cellArray = []

    const cellsPerSide = 0

    const formStyle = {
        display: grid, 
        gridTemplateColumns: undefined,
        gridTemplateRows: undefined,
    }

    useEffect(() => {

    if (props.chosenCellsPerSide){
        cellsPerSide = props.chosenCellsPerSide
    }
    
    
    const getGridCells = (cellsPerSide) => {
        cellArray = []

        for(let i=1; i = cellsPerSide; i++){
            cellArray.push(<NameCell />, <AnswerCell />)
        }
        
    }


    getGridCells()

    formStyle.gridTemplateColumns = `repeat(${cellsPerSide}, 1fr)`
    formStyle.gridTemplateRows = `repeat(${cellsPerSide}, 1fr 2fr )`
        

    },[props.chosenColorOne, props.chosenColorTwo, props.chosenCellsPerSide])
    
    
    
        return (
            <div className="dynamic-grid" style={formStyle}>{cellArray}</div>
        )
                
                
        
        
    
}

export default DynamicGrid