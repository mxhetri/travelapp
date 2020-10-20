import React from "react";
import './mainSection.css'
// import '/src/App';
import {Button} from "../button/Button";

function MainSection() {

    return(
        <div className='mainSection-container'>
            <video src='/videos/video-1.mp4' autoPlay loop/>
            <h1>Adventure Started</h1>
            <p> What u wanna do ?</p>
            <div className='mainSection-btns'>
                <Button className='btn'
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'>
                    Get Started
                </Button>

                <Button className='btn'
                        buttonStyle='btn--primary'
                        buttonSize='btn--large'>
                    Watch Talier <i className='far fa-play circle'/>
                </Button>
            </div>
        </div>
    )

}

export default MainSection;