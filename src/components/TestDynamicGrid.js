
import {useState, useRef, useEffect, React} from 'react'
import {NameCell, AnswerCell} from './Cell'


import uniqid from 'uniqid'

 function TestDynamicGrid(props){
    const [dataArray, setDataArray] = useState([])
    const {chosenCellsPerSide, hasHappenedOnce, title, description, playTime, genre, colorOne, colorTwo} = props

    const submitPuzzle = async (req,res) => {
        let count = 0
        for (let cellData of dataArray){
            
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
                data_array: dataArray,
                color_one: colorOne,
                color_two: colorTwo,
                featured: false
            }

            console.log(puzzleData)
            console.log("on count")
            const response = await fetch("http://localhost:3000/create", {
                method: 'POST',
                mode: 'cors',
                headers: {
                    "content-type": "application/json",
                    
                },
                body: JSON.stringify(puzzleData)
                
            })
            .then(response => response.json()) 
            .then(json => console.log(json));

            
            
            
        }
        catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        

        if (!hasHappenedOnce.current){
            
            let cellsPerSide = chosenCellsPerSide
            

            const getGridData = (cellsPerSide) => {
                
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
                    
                    tempDataArray.push(nameCellData, answerCellData)
                }
                
                setDataArray(tempDataArray)
                
                
                
                hasHappenedOnce.current = true
                
            }

           
    
        getGridData(cellsPerSide)
        }
        
        },[chosenCellsPerSide, dataArray])

        
    
        return (
            <div className="grid-container">
                <div className="dynamic-grid" style={{gridTemplateColumns: `repeat(${chosenCellsPerSide}, 1fr 2fr)`, gridTemplateRows: `repeat(${chosenCellsPerSide}, 1fr)`}}>{
                    dataArray?.map((cellData,i) => {
                        // console.log(cellData)
                        if(cellData.name === ""){

                            
                            return <NameCell key={cellData.id} id={cellData.id}  dataArray={dataArray} setDataArray={setDataArray}  />
                        }
                        else {
                           return <AnswerCell key={cellData.id} id={cellData.id} dataArray={dataArray} setDataArray={setDataArray}/>
                        }
                        
                    })
                }</div>
                <button className="green-txt-btn submit-btn" onClick={(event) => {submitPuzzle(event)}}>Submit Puzzle</button>
            </div>
            
        )
                
                
        
        
    
}

export default TestDynamicGrid