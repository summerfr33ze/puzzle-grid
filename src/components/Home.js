import React, {useState, useEffect, useRef} from "react"
import FeaturedPuzzles from "./FeaturedPuzzles"
import '../App.css'
import Header from './Header'

function Home (props) {

    

    

    
    

    return (
        <div>
            <Header className="header"/>
            <div className="main">
                
                <FeaturedPuzzles type="all"/>
                
            </div>
            <div className="footer"></div>
        </div>
    )
}

export default Home

