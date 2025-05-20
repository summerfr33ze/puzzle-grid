import {useState, useRef, useEffect, React} from 'react'
import {NameCell, AnswerCell} from './Cell'


import uniqid from 'uniqid'

 function EditGrid(props){
    
    const {puzzleId, chosenCellsPerSide, hasHappenedOnce, title, description, playTime, genreId, featured, colorOne, colorTwo, data, originalTitle} = props
    
    let [dataArray, setDataArray] = useState(data)

    const submitPuzzle = async (req,res) => {
        let count = 0
        for (let cellData of dataArray){
            
            for (let val in cellData){
                if (val === ''){
                    console.log("no data")
                    return
                }
                else {
                    
                    count += 1
                    
                }
            }
        }

        

        if (count === chosenCellsPerSide^2*5)
        try {

            console.log(colorOne + colorTwo)
            
            let puzzleData = {
                _id: puzzleId,
                title: title,
                description: description,
                genre: genreId,
                play_time: playTime,
                cells_per_side: chosenCellsPerSide,
                data_array: dataArray,
                color_one: colorOne,
                color_two: colorTwo,
                featured: false
            }

            console.log(puzzleData)

            


            const jwtToken = sessionStorage.getItem('jwtToken')

            

            const response = await fetch(`http://localhost:3000/edit/${genreId}/puzzles/${puzzleId}`, {
                method: 'POST',
                mode: 'cors',
                headers: {
                "content-type": "application/json",
                "authorization": `Bearer ${jwtToken}`
                },
                body: JSON.stringify(puzzleData)
                    
                })
                .then(response => response.text()) 
                .then(text => console.log(text));

            }
            
            

            
            
            
        
        catch (error) {
            console.error(error)
        }
    }

    
        
    
        return (
            <div className="grid-container">
                <div className="dynamic-grid" style={{gridTemplateColumns: `repeat(${chosenCellsPerSide}, 1fr 2fr)`, gridTemplateRows: `repeat(${chosenCellsPerSide}, 1fr)`}}>{
                    data?.map((cellData,i) => {
                        console.log(title)
                        
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

export default EditGrid