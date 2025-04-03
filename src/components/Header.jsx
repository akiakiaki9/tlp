import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className="video-bg">
            <video
                src="/videos/header.mp4"
                type="video/mp4"
                autoPlay
                muted
                loop
                playsInline>
            </video>
            <div className="effects"></div>
            <div className="video-bg__content">
                <p className='video-subtitle2'>Introduce with <span>TLP</span></p>
                <h1 className="video-title">Tillayev Law Partners</h1>
                <p className="video-subtitle">A law firm providing high-quality legal services to businesses and individuals</p>
                <a href="#contacts"><button>Contact us today</button></a>
            </div>
        </div>
    )
};