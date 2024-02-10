import React from "react"
import ReactDOM from "react-dom"
import Nav from "./components/Nav.js"
import Trip from "./components/Trip.js"
import data from "./data.js"

export default function App(){
    const place = data.map((element)=>{
            return(
                <Trip
                    // title={element.title}
                    // location={element.location}
                    // mapLink={element.mapLink}
                    // startDate={element.startDate}
                    // endDate={element.endDate}
                    // description={element.description}
                    // imageURL={element.imageURL}
                    element={element}
                />
            )
    })
    return(
        <div>
            <Nav />
            {place}
        </div>
    )
}