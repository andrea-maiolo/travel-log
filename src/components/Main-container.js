import React from "react";

function Main(props){
    let lastElementID
    if(props.lastElement){
        lastElementID = "lastElement";
        return(
            <div className="experience-container" id={lastElementID}>
                <img className="pictures" src={props.imageUrl} />
                <div className='experience-info'>
                    <div className="locationStuff">
                        <img className="locationLogo" src={require('./../images/location.png')} />
                        <p className="location">{props.location}</p>
                        <a href={props.googleMapsUrl} className="maps">View on Google Maps</a>
                    </div>
                    <h2 className="experience-title">{props.title}</h2>
                    <p className="date">{props.startDate} - {props.endDate}</p>
                    <p className="experience-description">{props.description}</p>
                </div>
            </div>
        )
    }
    return(
        <div className="experience-container">
            <img className="pictures" src={props.imageUrl} />
            <div className='experience-info'>
                <div className="locationStuff">
                    <img className="locationLogo" src={require('./../images/location.png')} />
                    <p className="location">{props.location}</p>
                    <a href={props.googleMapsUrl} className="maps">View on Google Maps</a>
                </div>
                <h2 className="experience-title">{props.title}</h2>
                <p className="date">{props.startDate} - {props.endDate}</p>
                <p className="experience-description">{props.description}</p>
            </div>
        </div>
    )
}

export default Main
