
import {useState, useRef, useEffect, React} from 'react'
import {NameCell, AnswerCell} from './Cell'

import uniqid from 'uniqid'

 function DynamicGrid(props){
    const [cellArray, setCellArray] = useState([])
    // const [dataArray, setDataArray] = useState([])
    const dataArray = useRef(null)
    const {chosenCellsPerSide, hasHappenedOnce, title, description, playTime, genre, colorOne, colorTwo} = props

    const submitPuzzle = async (req,res) => {
        let count = 0
        for (let cellData of dataArray.current){
            console.log(cellData)
            for (let val in cellData){
                if (val === ''){
                    console.log("no data")
                    return
                }
                else {
                    console.log(val)
                    count += 1
                    
                }
            }
        }

        if (count === chosenCellsPerSide^2*5)
        try {
            let puzzleData = {
                title: title,
                description: description,
                genre: genre,
                play_time: playTime,
                cells_per_side: chosenCellsPerSide,
                data_array: dataArray.current,
                colorOne: colorOne,
                colorTwo: colorTwo,
                featured: false
            }

            console.log(puzzleData)
            console.log("on count")
            const response = await fetch("http://localhost:3000/create", {
                method: 'POST',
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(puzzleData)
            })
                
            
            res.send("posted.")
            
        }
        catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        

        if (!hasHappenedOnce.current){
            
            let cellsPerSide = chosenCellsPerSide
            

            const getGridCells = (cellsPerSide) => {
                let tempCellArray = []
                let tempDataArray = []
    
                for(let i=1; i <= cellsPerSide ** 2; i++){
                    let nameCellUniqid = uniqid()
                    let answerCellUniqid = uniqid()
                    let nameCellData = {
                        id: nameCellUniqid,
                        name: ''
                    }
                    let answerCellData = {
                        id: answerCellUniqid,
                        answer: '',
                        hint: ''
                    }
                    tempCellArray.push(<NameCell key={nameCellUniqid} id={nameCellUniqid}  dataArray={dataArray}  />, <AnswerCell key={answerCellUniqid} id={answerCellUniqid} dataArray={dataArray}/>)
                    tempDataArray.push(nameCellData, answerCellData)
                }
                dataArray.current = tempDataArray
                setCellArray(tempCellArray)
                
                
                
                
                hasHappenedOnce.current = true
                
            }

           
    
        getGridCells(cellsPerSide)
        }
        
        },[chosenCellsPerSide, cellArray, dataArray])

        
    
        return (
            <div className="grid-container">
                <div className="dynamic-grid" style={{gridTemplateColumns: `repeat(${chosenCellsPerSide}, 1fr 2fr)`, gridTemplateRows: `repeat(${chosenCellsPerSide}, 1fr)`}}>{cellArray}</div>
                <button className="green-txt-btn submit-btn" onClick={(event) => {submitPuzzle(event)}}>Submit Puzzle</button>
            </div>
            
        )
                
                
        
        
    
}

export default DynamicGrid