import React, {useState, useEffect, useRef} from "react"
import FeaturedPuzzles from "./FeaturedPuzzles"
import '../App.css'
import Header from './Header'
import Footer from './Footer'

function Home (props) {

    

    

    
    

    return (
        <div className="genre-page">
            <Header className="header"/>
            <div className="main">
                
                <FeaturedPuzzles type="All"/>
                
            </div>
            <Footer />
        </div>
    )
}

export default Home

