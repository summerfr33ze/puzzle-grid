import {useState, useEffect, useRef} from 'react'

function Timer (props){

   
   const isPlaying = props.is_playing
   const hasBeenClicked = props.has_been_clicked
    const [secs, setSecs] = useState(0)
    const [mins, setMins] = useState(0)
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
                    
                }

                if (secs > 0){
                    setSecs(secs - 1)
                }
                else {
                    
                    setSecs(59)
                    setMins(mins - 1)
                }
               },1000)

               
        
               
                return () => {clearInterval(interval)}
        }


       
    }, [secs, isPlaying])

    return (
        <div>
            <span>{mins + "min"}</span>:<span>{secs + "sec"} </span>
        </div>
    )
}

export default Timer