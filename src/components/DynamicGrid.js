
import {useState, useRef, useEffect, React} from 'react'
import {NameCell, AnswerCell} from './Cell'

import uniqid from 'uniqid'

 function DynamicGrid(props){
    const [cellArray, setCellArray] = useState([])
    const [dataArray, setDataArray] = useState([])

    function nameCellUpdatesDataArray(key, nameValue){
        let tempArray = dataArray
        for(let cellData in tempArray){
            if(cellData.key === key){
                cellData.name = nameValue
            }
            else{return}
        }
        setDataArray(tempArray)
    
    }

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
        console.log("hi")

        if (!hasHappenedOnce.current){
            console.log("hello")
            let cellsPerSide = chosenCellsPerSide
            console.log(chosenCellsPerSide)

            const getGridCells = (cellsPerSide) => {
                let tempCellArray = []
                let tempDataArray = []
                for(let i=1; i <= cellsPerSide ** 2; i++){
                    let nameCellUniqid = uniqid()
                    let answerCellUniqid = uniqid()
                    let nameCellData = {
                        key: nameCellUniqid,
                        name: ''
                    }
                    let answerCellData = {
                        key: answerCellUniqid,
                        answer: '',
                        hint: ''
        
                    }
                    tempCellArray.push(<NameCell key={nameCellUniqid} id={nameCellUniqid}  dataArray={dataArray} nameCellUpdatesDataArray={nameCellUpdatesDataArray} />, <AnswerCell key={answerCellUniqid} id={answerCellUniqid} dataArray={dataArray} answerCellUpdatesDataArray={answerCellUpdatesDataArray} />)
                    tempDataArray.push(nameCellData, answerCellData)
                    
                }
                
                setCellArray(tempCellArray)
                setDataArray(tempDataArray)
                
                
                hasHappenedOnce.current = true
                
            }

           
    
        getGridCells(cellsPerSide)
        }
        
        },[chosenCellsPerSide, cellArray, dataArray])

        useEffect(()=>{
            console.log(dataArray)
        },[dataArray]
        )
    
    
        return (
            <div className="dynamic-grid" style={{gridTemplateColumns: `repeat(${chosenCellsPerSide}, 1fr 2fr)`, gridTemplateRows: `repeat(${chosenCellsPerSide}, 1fr)`}}>{cellArray}</div>
        )
                
                
        
        
    
}

export default DynamicGrid