import React from "react";

function Main(props){
    return(
        <div className="experience-container">
            <img className="pictures" src={props.imageUrl} />
            <div className='experience-description'>
                <div className="locationStuff">
                    <img className="locationLogo" src={require('./../images/location.png')} />
                    <p className="location">{props.location}</p>
                    <a herf={props.googleMapsUrl} className="maps">View on Google Maps</a>
                </div>
                <h2 className="experience-title">{props.title}</h2>
                <div className='dateStuff'>
                    <p className="startDate">{props.startDate}</p> -
                    <p className="endDate">{props.endDate}</p>
                </div>
                <p className="experience-description">{props.description}</p>
            </div>
        </div>
    )
}

export default Main