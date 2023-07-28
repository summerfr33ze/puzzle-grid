import {useState, useRef, useEffect, React, createElement} from 'react'
import {NameCell, AnswerCell} from './Cell'
import uniqid from 'uniqid'

 function DynamicGrid(props){
    const [cellArray, setCellArray] = useState([])
    const isInitialRender = useRef(true)


    useEffect(() => {

    if(isInitialRender.current){
        console.log("hi")
        isInitialRender.current = false
        return
    }

    if (!props.hasHappenedOnce.current){
        let cellsPerSide = props.chosenCellsPerSide


    const getGridCells = (cellsPerSide) => {
        let tempCellArray = []
        for(let i=1; i <= cellsPerSide ** 2; i++){
            tempCellArray.push(<NameCell key={uniqid()}/>, <AnswerCell key={uniqid()} />)
            
        }
        setCellArray(tempCellArray)
        console.log(cellArray)

        props.hasHappenedOnce.current = true
    }

    getGridCells(cellsPerSide)

    }


    
        

    },[props.chosenColorOne, props.ChosenColorTwo, props.chosenCellsPerSide, cellArray])
    
    
    
        return (
            <div className="dynamic-grid" style={{gridTemplateColumns: `repeat(${props.chosenCellsPerSide}, 1fr 2fr)`, gridTemplateRows: `repeat(${props.chosenCellsPerSide}, 1fr)`}}>{cellArray}</div>
        )
                
                
        
        
    
}

export default DynamicGrid