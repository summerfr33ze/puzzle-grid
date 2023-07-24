import React, {useState, useEffect, useRef} from "react"
import FeaturedPuzzles from "./FeaturedPuzzles"
import userEvent from "@testing-library/user-event"

function Home (props) {

    const user = fetch()

    return (
        <div>
            <div className="header">
                <div className="header-left">
                    <img className="logo-icon"></img>
                    <div className="title"><span className="title-span">Puzzle</span> Grid</div>
                </div>
                <div className="genres"></div>
                <div className="header-right">
                    <a href="/Create">Create</a>
                    <div className="user">{user.username}</div>
                    <img className="user-icon"></img>
                </div>
                
            </div>
            <div className="main">
                
                <FeaturedPuzzles type="home"/>
                
            </div>
            <div className="footer"></div>
        </div>
    )
}

export default Home

