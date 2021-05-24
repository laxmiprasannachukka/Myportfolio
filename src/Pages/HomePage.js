import React from 'react';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
//import {faYoutube} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am 
                    <span> Laxmi Prasanna</span>
                </h1>
                <p className="h-sub-text">
                    I am a Passionate Full Stack Developer.Currently I am exploring new opportunities to work as a Full Stack Developer.
                </p>
                <div className="icons">
                    <a href="https://www.linkedin.com/in/laxmiprasanna-chukka-680a28104" className="icon-holder" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} className="icon fb" />
                    </a>
                    <a href="https://github.com/laxmiprasannachukka" className="icon-holder" target="_blank">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </a>
                    
                </div>
            </header>
        </div>
    )
}

export default HomePage;
