import {useEffect, useState, useRef, createContext} from 'react'
import {Form} from 'react-bootstrap'
import DynamicGrid from './DynamicGrid'
import uniqid from 'uniqid'
import {NameCell, AnswerCell} from './Cell'

function Create(props){

    const cellsPerSide = useRef(null)
    const colorOne = useRef(null)
    const colorTwo = useRef(null)
    const hasHappenedOnce = useRef(false)
    const [cellArray, setCellArray] = useState([])
    const dataArray = useRef([])
    const [nameValue, setNameValue] = useState('')
    const [answerValue, setAnswerValue] = useState('')
    const [hintValue, setHintValue] = useState('')

    const NameContext = createContext()


    const handleNameValueChange = (event) => {
        setNameValue(event.target.value)
    }

    const handleAnswerValueChange = (event) => {
        setAnswerValue(event.target.value)
    }

    const handleHintValueChange = (event) => {
        setHintValue(event.target.value)
    }

    
    

    

    const [chosenColorOne, setChosenColorOne] = useState("")
    const [chosenColorTwo, setChosenColorTwo] = useState("")
    const [chosenCellsPerSide, setChosenCellsPerSide] = useState(0)

    function generateGrid(event){
        hasHappenedOnce.current = false
        event.preventDefault()
        setChosenColorOne(colorOne.current.value)
        setChosenColorTwo(colorTwo.current.value)
        setChosenCellsPerSide(cellsPerSide.current.value)
        
    }

    function submitPuzzle(event){
        event.preventDefault()
        
    }

    

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
            tempCellArray.push(<NameCell key={nameCellUniqid} id={nameCellUniqid} handleNameValueChange={handleNameValueChange} dataArray={dataArray} updateDataArray={updateDataArray} />, <AnswerCell key={answerCellUniqid} id={answerCellUniqid} handleAnswerValueChange={handleAnswerValueChange} handleHintValueChange={handleHintValueChange} updateDataArray={updateDataArray} hintValue={hintValue} answerValue={answerValue}/>)
            tempDataArray.push(nameCellData, answerCellData)
            
        }
        setCellArray(tempCellArray)
        dataArray.current = tempDataArray
        
    
        hasHappenedOnce.current = true
    }

    function updateDataArray(key){
        let tempArray = dataArray.current
        for(let cellData in tempArray){
            if(cellData.key === key){
                if(cellData.name){
                cellData.name = nameValue
                }
                else{
                    cellData.answer = answerValue
                    cellData.hint = hintValue
                }
            }
        }
        dataArray.current = tempArray
    }

    



    return (
        <div className="create-page">
        <Form className="grid-form">
        <Form.Label htmlFor="cells-per-side">How many cells per side?</Form.Label>
        <Form.Control type="number" name="cells-per-side"  ref={cellsPerSide}></Form.Control>

        <Form.Group className="color-container">
        <Form.Label htmlFor="color-one">Choose Two Colors For Your Puzzle</Form.Label>
        <Form.Control type="color" className="choose-color" name="color-one" ref={colorOne}></Form.Control>
        <Form.Control type="color" className="choose-color" ref={colorTwo}></Form.Control>
        </Form.Group>
        
        <div className="btn-container">
        <button  className="green-txt-btn"  onClick={(event) => {generateGrid(event)}}>Create Grid</button>
        <button className="green-txt-btn" onClick={(event) => {submitPuzzle(event)}}>Submit Puzzle</button>
        </div>
        
        </Form>

        <DynamicGrid nameValue={nameValue} hasHappenedOnce={hasHappenedOnce} chosenColorOne={chosenColorOne} chosenColorTwo={chosenColorTwo} chosenCellsPerSide={chosenCellsPerSide} cellArray={cellArray} dataArray={dataArray} getGridCells={getGridCells}/>
        </div>
        


    )
    
}

export default Create