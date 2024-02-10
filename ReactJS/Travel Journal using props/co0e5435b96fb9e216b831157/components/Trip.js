import React from "react"
import ReactDOM from "react-dom"

export default function Trip(props){
    
    return(
        <div className="trip">
            <img src={props.element.imageURL} className="trip--image"/>
            <section className="trip--info">
                <img src="./images/locationIcon.png" className="trip--locationIcon"/><span className="trip--location">{props.element.location}</span><span><a href={props.element.mapLink} className="trip--mapLink">View on Google Maps</a></span>
                <h1 className="trip--title">{props.element.title}</h1>
                <h3 className="trip--date">{props.element.startDate} - {props.element.endDate}</h3>
                <p className="trip--description">{props.element.description}</p>
            </section>
        </div>
    )
}
                    // location
                    // title
                    // mapLink
                    // startDate
                    // endDate
                    // description
                    // imageURL