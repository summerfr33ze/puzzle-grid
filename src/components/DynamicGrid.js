
import {useState, useRef, useEffect, React} from 'react'
import {NameCell, AnswerCell} from './Cell'

import uniqid from 'uniqid'

 function DynamicGrid(props){
    const [cellArray, setCellArray] = useState([])

    

    function answerCellUpdatesDataArray(key, answerValue, hintValue){
        let tempArray = dataArray
            for(let cellData in tempArray){
                if(cellData.key === key){
                    cellData.answer = answerValue
                    cellData.hint = hintValue
                }
                else{return}
            }
    }



    
    const {chosenCellsPerSide, hasHappenedOnce} = props

    useEffect(() => {
        

        if (!hasHappenedOnce.current){
            
            let cellsPerSide = chosenCellsPerSide
            

            const getGridCells = (cellsPerSide) => {
                let tempCellArray = []
                for(let i=1; i <= cellsPerSide ** 2; i++){
                    let nameCellUniqid = uniqid()
                    let answerCellUniqid = uniqid()
                    tempCellArray.push(<NameCell key={nameCellUniqid} id={nameCellUniqid}  dataArray={dataArray} setDataArray={setDataArray}  />, <AnswerCell key={answerCellUniqid} id={answerCellUniqid} dataArray={dataArray} answerCellUpdatesDataArray={answerCellUpdatesDataArray} />)
                }
                setCellArray(tempCellArray)
                
                
                
                hasHappenedOnce.current = true
                
            }

           
    
        getGridCells(cellsPerSide)
        }
        
        },[chosenCellsPerSide, cellArray])

        
    
        return (
            <div className="dynamic-grid" style={{gridTemplateColumns: `repeat(${chosenCellsPerSide}, 1fr 2fr)`, gridTemplateRows: `repeat(${chosenCellsPerSide}, 1fr)`}}>{cellArray}</div>
        )
                
                
        
        
    
}

export default DynamicGrid