import {useState, useRef, useEffect, React, createElement} from 'react'

import uniqid from 'uniqid'

 function DynamicGrid(props){
    const isInitialRender = useRef(true)


    useEffect(() => {

    if(isInitialRender.current){
        console.log("hi")
        isInitialRender.current = false
        return
    }

    if (!props.hasHappenedOnce.current){
        let cellsPerSide = props.chosenCellsPerSide


    props.getGridCells(cellsPerSide)
    }
    
    },[props.chosenColorOne, props.ChosenColorTwo, props.chosenCellsPerSide, props.cellArray, isInitialRender])
    
    
    
        return (
            <div className="dynamic-grid" style={{gridTemplateColumns: `repeat(${props.chosenCellsPerSide}, 1fr 2fr)`, gridTemplateRows: `repeat(${props.chosenCellsPerSide}, 1fr)`}}>{props.cellArray}</div>
        )
                
                
        
        
    
}

export default DynamicGrid