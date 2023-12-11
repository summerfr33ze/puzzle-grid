import {Form, Button} from 'react-bootstrap'
import {useEffect, useState, useRef} from 'react'





function NameCell(props){


    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false)
    const [nameValue, setNameValue] = useState('')

    

       
    function submitCellData (event){
        event.preventDefault()
        setHasBeenSubmitted(true)

        
        let tempDataArray = props.dataArray.current
        console.log(tempDataArray)
        for(let cellData of tempDataArray){
        if(cellData.id === props.id){
        cellData.name = nameValue
        }
        }
       

    props.dataArray.current = tempDataArray
        
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

        
        let tempDataArray = props.dataArray.current
        console.log(tempDataArray)
        for(let cellData of tempDataArray){
        if(cellData.id === props.id){
        cellData.answer = answerValue
        cellData.hint = hintValue
        }

       

        props.dataArray.current = tempDataArray
        
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
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false)
    const [answerValue, setAnswerValue] = useState('')
    const [hasBeenClicked, setHasBeenClicked] = useState(false)
    const [colorOne, setColorOne] = useState(props.color_one)
    const [colorTwo, setColorTwo] = useState(props.color_two)
    const changeColor = () => {
        setColorOne(props.color_two)
        setColorTwo(props.color_one)
    }

    function submitAnswerData(event){
        event.preventDefault()
        setHasBeenSubmitted(true)

    }

    if(!hasBeenSubmitted){
        return (
            
                <Form  className="grid-cell" style={{backgroundColor: colorOne}} onSubmit={(event) => submitAnswerData(event)}>
                <Form.Control name="answer" className="answer" size="sm" onChange={(event) => {setAnswerValue(event.target.value)}} ></Form.Control>
                <button type="submit" hidden></button>
                </Form>
            
        )
    }
    else {
        if (answerValue === props.answer && props.is_playing){
            return (
                <div className="grid-cell div-cell" style={{backgroundColor: colorOne, color: colorTwo }} onClick={changeColor}>
                    <div >* {props.answer} *</div>
                    <div>{props.hint}</div>
                    
                </div>
            )
        }

        else if (!props.is_playing){
            return (
                <div className="grid-cell div-cell">
                    <div>Press Play To Start!</div>
                </div>
            )
        }
        
        else {
            return (
                <div className="grid-cell div-cell" style={{backgroundColor: colorOne, color: colorTwo }}>
                    <div>Wrong Answer!</div>
                </div>
            )
        }
    }
}



export {NameCell, AnswerCell, PlayerNameCell, PlayerAnswerCell}



