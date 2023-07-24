import {Form} from 'react-bootstrap'
import {useEffect, useState, useRef} from 'react'





function NameCell(props){

    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false)
    const cellName = useRef(null)
    let currentCellName

    
    function submitCellData (){
        e.preventDefault()
        setHasBeenSubmitted(true)

    }

    useEffect(() => {
       currentCellName = cellName.current.value
    }, [hasBeenSubmitted])

    if(!hasBeenSubmitted){
        return (
            <Form className="grid-cell" onsubmit={(e) => submitCellData(e)}>
                <Form.Label htmlFor="cell-name">Cell Name</Form.Label>
                <Form.Control name="cell-name" ref={cellName}></Form.Control>
                <Form.Submit hidden></Form.Submit>
            </Form>
            )
    }

    else {
        return (
            <div>{currentCellName}</div>
        )
    }

    
}



function AnswerCell(props) {
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false)
    const hint = useRef(null)
    const answer = useRef(null)
    let currentHint 
    let currentAnswer

    function submitCellData (){
        e.preventDefault()
        setHasBeenSubmitted(true)

    }

    useEffect(()=>{
        currentHint = hint.current.value
        currentAnswer = answer.current.value
    }, [hasBeenSubmitted])
    
    if(!hasBeenSubmitted){
        return (
            <Form className="grid-cell form-cell" onsubmit={(e) => submitCellData(e)}>
                <Form.Label htmlFor="answer">Answer</Form.Label>
                <Form.Control name="answer" ref={answer}></Form.Control>
                <Form.Label htmlFor="hint">Hint</Form.Label>
                <Form.Control name="hint" ref={hint}></Form.Control>
            </Form>
        )
    }
    else {
        return (
            <div className="grid-cell div-cell">
                <div>*{currentHint}*</div>
                <div>{currentAnswer}</div>
            </div>
        )
    }
        
}

export {NameCell, AnswerCell}



