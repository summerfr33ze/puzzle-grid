import {Form, Button} from 'react-bootstrap'
import {useEffect, useState, useRef} from 'react'





function NameCell(props){


    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false)
    const [nameValue, setNameValue] = useState('')

    

       
    function submitCellData (event){
        event.preventDefault()
        setHasBeenSubmitted(true)

        
        let tempDataArray = props.dataArray
        // console.log(tempDataArray)
        for(let cellData of tempDataArray){
        if(cellData.id === props.id){
        cellData.name = nameValue
        }
        }
       

    props.setDataArray(tempDataArray)
        
    }
    
    

        if (!hasBeenSubmitted){
        return (
            
            <Form className="grid-cell" onSubmit={(event) => submitCellData(event)}>
                <Form.Label htmlFor="cell-name">Name</Form.Label>
                <Form.Control name="cell-name" size="sm" onChange={(event) => {setNameValue(event.target.value)}}></Form.Control>
                <Button type="submit" hidden></Button>
            </Form>
           
        )
        }
        else {
            return <div className="grid-cell div-cell">{nameValue}</div>
        }
    
}



function AnswerCell(props) {

    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false)
    const [answerValue, setAnswerValue] = useState('')
    const [hintValue, setHintValue] = useState('')
    
    
    function submitCellData (event){
        event.preventDefault()
        setHasBeenSubmitted(true)

        
        let tempDataArray = props.dataArray
        // console.log(tempDataArray)
        for(let cellData of tempDataArray){
        if(cellData.id === props.id){
        cellData.answer = answerValue
        cellData.hint = hintValue
        }

       

        props.setDataArray(tempDataArray)
        
    }
}
    
    if(!hasBeenSubmitted){
        return (
        
                <Form  className="grid-cell" onSubmit={(event) => submitCellData(event)}>
                <Form.Label htmlFor="answer" >Answer</Form.Label>
                <Form.Control name="answer" className="answer" size="sm" onChange={(event) => {setAnswerValue(event.target.value)}} ></Form.Control>
                <Form.Label htmlFor="hint">Hint</Form.Label>
                <Form.Control name="hint" size="sm" onChange={(event) => {setHintValue(event.target.value)}} ></Form.Control>
                <button type="submit" hidden></button>
                </Form>
            
        )
    }
    else {

        return (
            <div className="grid-cell div-cell">
                <div>* {hintValue} *</div>
                <div>{answerValue}</div>
            </div>
        )
    }
        
}

function PlayerNameCell(props) {
    return (
        <div className="grid-cell div-cell name-cell">
            {props.name}
        </div>
        )
}

function PlayerAnswerCell(props) {
    
    
    const isPlaying = props.is_playing
    const isEnded = props.is_ended
    const endGame = props.end_game
    const hasBeenClicked = props.has_been_clicked
    const answer = props.answer
    const hint = props.hint
    


    const changeColor = () => {
        setColorOne(colorTwo)
        setColorTwo(colorOne)
    }

    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false)
    const [answerValue, setAnswerValue] = useState('')
    const [colorOne, setColorOne] = useState(props.color_one)
    const [colorTwo, setColorTwo] = useState(props.color_two)
    const hasRanOnce = useRef(false)

    

    function submitAnswerData(event){
        event.preventDefault()
        setHasBeenSubmitted(true)

        if(answerValue !== answer){
            endGame()
        }
    }


    
    
    if(!hasBeenSubmitted){
        return (
                
                    <Form style={{backgroundColor: colorOne}}  className="grid-cell" onSubmit={(event) => submitAnswerData(event)}>
                <Form.Control name="answer" className="answer" size="sm" onChange={(event) => {setAnswerValue(event.target.value)}} ></Form.Control>
                <button type="submit" hidden></button>
                </Form>

                
            
        )
    }
    else {
        if (answerValue === answer && hasBeenClicked){
           
            return (
                <div className="grid-cell div-cell" style={{backgroundColor: colorOne, color: colorTwo }} onClick={changeColor}>
                    <div >* {answer} *</div>
                    <div>{hint}</div>
                    
                </div>
            )
        }

        else if (!hasBeenClicked){
            return (
                <div className="grid-cell div-cell">
                    <div>Press Play To Start!</div>
                </div>
            )
        }
        
    }
}



export {NameCell, AnswerCell, PlayerNameCell, PlayerAnswerCell}



