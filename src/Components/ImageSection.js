import React from 'react';
import about from '../img/about.jpg';

function ImageSection() {
    return (
        <div className="ImageSection">
        {/** 
            <div className="img">
             
                <img src={about} alt=""/>
            
            </div>
        **/ }
            <div className="about-info">
                <h4>I am<span> Laxmi prasanna</span></h4>
                <p className="about-text">
                    I am full stack developer and love to build full stack applications.My tech stack includes ReactJS as Frontend, MongoDB as backend and Express as server.
                </p>
                {/** 
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>
                        <p>Countries</p>
                    </div>
                    <div className="right-section">
                        <p>: Lorem Ipsum</p>
                        <p>: 50</p>
                        <p>: French</p>
                        <p>: French, Spanish, English</p>
                        <p>: 2 Beightbridge, BN7 GB9, United kingdom</p>
                        <p>: France, Spain, Germany</p>
                    </div>
                </div>
                **/  }
                <a href="https://drive.google.com/file/d/1Aes11CsFMlR6CjURSmAGzLju1OTHcxga/view?usp=sharing" target="_blank">
                <button className="btn">Download Cv</button>
                </a>
            </div>
        </div>
    )
}

export default ImageSection;