import React from 'react'

function ImageCard(props) {
    return (
      <div className="image-card">
        <img className="project-gallery" src={props.src} alt={props.alt} style={{ width: props.width }}/>
        <p className="caption">{props.alt}</p>
      </div>
    );
}

export default ImageCard