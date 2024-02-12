
import React from 'react'
import './css/ProjectCard.css'
import { Link } from "react-router-dom";

function ProjectCard(props) {
    return (
        <Link className='project-card' to={props.link}>
            <p className="body project-description">
                    {props.project}
                </p>
            <img src={props.src} className='project-image' alt='project'/>
            <div className='darken project-image'></div>
            
        </Link >
    );
}

export default ProjectCard;