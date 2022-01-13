import React from "react";

function Main(props){
    return(
        <div className="experience-container">
            <img src={props.imageUrl} />
            <div className='experience-description'>
                <p>{props.location}</p>
                <a>{props.googleMapsUrl} </a>
                <h2>{props.title}</h2>
                <p>{props.startDate}</p>
                <p>{props.endDate}</p>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default Main