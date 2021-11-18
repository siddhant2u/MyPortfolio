import React from 'react'
import './about.css'

export default function About() {
    return (
        <div className='about' id='about'>
            <div className="content-left">
                <div className="image">
                    <div className="imageBg"></div>
                </div>
            </div>
            <div className="content-right">
                <h1 className="aboutMe">About Me</h1>
                <p className="para">Hello I am Siddhant Priyadarshi.
                I am a Computer Science Student completing my B.Tech at SRM Institute of Science and Technology.
                I am a self taught developer and a coder.
                Photography is my passion and I love trying new things.</p>
            </div>
        </div>
    )
}
