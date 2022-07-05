import React from 'react'

const Video = (props) => {
    return (
        <div className="video-container">
            <div className="video-image">
            <img src={props.thumbnail} alt="Same alt value" />
            </div>
            <div className="video-info">
            <h3>{props.title}</h3>
            <p>Upload date: {props.dateUpload}</p>
            <h4>Channel's Title: {props.channel}</h4>
            <p>{props.description}</p>
            </div>
        </div>
    );
}

export default Video