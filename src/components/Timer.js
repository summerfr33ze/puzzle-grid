import {useState, useEffect, useRef} from 'react'

function Timer (props){

   
   const isPlaying = props.is_playing
   const hasBeenClicked = props.has_been_clicked
   const endGame = props.end_game
    const [secs, setSecs] = useState(0)
    const [mins, setMins] = useState(0)
    const [secString, setSecString] = useState('00')
    const hasHappenedOnce = useRef(false)
    

    useEffect(()=>{
        
        if (!hasHappenedOnce.current){
            const getPlaytime = async () => {
                fetch(`http://localhost:3000/genres/sports/puzzles/${props.puzzleId}`)
                .then(response => response.json())
                .then((data) => {setMins(data.play_time)})
            }
            getPlaytime()
            hasHappenedOnce.current = true
        }
        
        if (hasBeenClicked) {
            const interval = setInterval(() => {

                if (mins === 0 && secs === 0){
                    endGame()
                }

                if (secs > 10){
                    setSecs(secs - 1)
                    setSecString(`${secs - 1}`)
                }
                else if (secs <= 10 && secs > 0){
                    setSecs(secs - 1)
                    setSecString(`0${secs - 1}`)
                }
                else {
                    
                    setSecs(59)
                    setSecString(`59`)
                    setMins(mins - 1)
                    
                }
               },1000)

               
        
               
                return () => {clearInterval(interval)}
        }


       
    }, [secs, isPlaying])

    return (
        <div className="timer">
            <span>{mins} </span>:<span>{secString} </span>
        </div>
    )
}

export default Timer

