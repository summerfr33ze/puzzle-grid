import {Form, Button} from 'react-bootstrap'
import {useEffect, useState, useRef} from 'react'





function NameCell(props){


    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false)
    const [nameValue, setNameValue] = useState('')
    


       
    function submitCellData (event){
        event.preventDefault()
        setHasBeenSubmitted(true)

        
        let tempDataArray = props.dataArray
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
                <Form.Label htmlFor="cell-name" >Name</Form.Label>
                <Form.Control name="cell-name" className="field" onChange={(event) => {setNameValue(event.target.value)}}></Form.Control>
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
    const [displayedAnswerValue, setDisplayedAnswerValue] = useState('')
    const [hintValue, setHintValue] = useState('')
    const [acceptedAnswerValues, setAcceptedAnswerValues] = useState('')
    const [autoSubmit, setAutoSubmit] = useState(false)
    
    
    function submitCellData (event){
        event.preventDefault()
        setHasBeenSubmitted(true)

        let answerArray = acceptedAnswerValues.split(', ')
        console.log(answerArray)

        
        let tempDataArray = props.dataArray
        for(let cellData of tempDataArray){
        if(cellData.id === props.id){
        cellData.displayed_answer = displayedAnswerValue
        cellData.accepted_answers = answerArray
        cellData.hint = hintValue
        cellData.auto_submit = autoSubmit
        }
    }

    console.log(tempDataArray)

        





       

    props.setDataArray(tempDataArray)
        
    
}


    
    if(!hasBeenSubmitted){
        return (
        
                <Form  className="grid-cell" onSubmit={(event) => submitCellData(event)}>
                <Form.Label htmlFor="hint">Hint</Form.Label>
                <Form.Control name="hint" className="field" onChange={(event) => {setHintValue(event.target.value)}} ></Form.Control>
                <Form.Label htmlFor="displayed-answer" > Displayed Answer</Form.Label>
                <Form.Control name="displayed-answer" className="field"  onChange={(event) => {setDisplayedAnswerValue(event.target.value)}} ></Form.Control>
                <Form.Label htmlFor="accepted-answer" >Accepted Answers</Form.Label>
                <Form.Control name="accepted-answer" className="field"  onChange={(event) => {setAcceptedAnswerValues(event.target.value)}} ></Form.Control>
                <Form.Label htmlFor="auto-submit-cell">Auto submit cell?</Form.Label>
                <Form.Check name="auto-submit-cell" type="checkbox" onChange={(event) => {setAutoSubmit(event.target.value)}}></Form.Check>
                <button type="submit" hidden></button>
                </Form>
            
        )
    }
    else {

        return (
            <div className="grid-cell div-cell">
                <div>* {hintValue} *</div>
                <div>{displayedAnswerValue}</div>
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
    const displayedAnswer = props.displayed_answer
    const acceptedAnswers = props.accepted_answers
    const hint = props.hint
    const autoSubmit = props.auto_submit
    
    /* make answer and accepted answers lower case so that answers aren't case sensitive
    check answer against array of accepted answers */
    function checkAnswer(answerValue, acceptedAnswers){
        let lowerCaseAnswerValue = answerValue.toLowerCase()
        let lowerCaseAcceptedAnswers = []
        for(let i=0; i < acceptedAnswers.length; i++){
         lowerCaseAcceptedAnswers.push(acceptedAnswers[i].toLowerCase())
        }

        


        if (lowerCaseAcceptedAnswers.includes(lowerCaseAnswerValue)){
            return true
        }
        else {return false}
    }
    


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

        if(checkAnswer(answerValue, acceptedAnswers) === false){
            endGame()
        }
        
    }

    if (isEnded){
        
        return (
            <div className="grid-cell div-cell" style={{backgroundColor: colorOne, color: colorTwo }}>
                <div>Play Again</div>
            </div>
        )
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

        
        if (autoSubmit === "on" || checkAnswer(answerValue, acceptedAnswers) && hasBeenClicked ){
           
            return (
                <div className="grid-cell div-cell" style={{backgroundColor: colorOne, color: colorTwo }} onClick={changeColor}>
                    <div >* {displayedAnswer} *</div>
                    <div>{hint}</div>
                    
                </div>
            )
        }

        else if (!hasBeenClicked){
            return (
                <div className="grid-cell div-cell" style={{backgroundColor: colorOne, color: colorTwo }}>
                    <div>Press Play To Start!</div>
                </div>
            )
        }
        
    }
}



export {NameCell, AnswerCell, PlayerNameCell, PlayerAnswerCell}



