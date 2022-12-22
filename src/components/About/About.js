import React from 'react'
import './about.css'
import bg from './image-bg.png'

export default function About() {
    return (
        <div className='about' id='about'>
            <div className="content-left">
                <div className="image">
                    <img className="imageBg" src={bg} alt="Italian Trulli"/>
                </div>
            </div>
            <div className="content-right">
                <h1 className="aboutMe">About Me</h1>
                <p className="para">Hello I am Siddhant Priyadarshi.<br></br>
                A final year student at SRM Institute of Science and Technology pursuing B.Tech in Computer Science Engineering.
                A tech enthusiast who likes to learn about new technology and work on it. Currently working on Blockchain and Web Development.
                Photography is my passion and I love trying new things.</p>
            </div>
        </div>
    )
}