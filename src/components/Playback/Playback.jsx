import '@src/components/Playback/Playback.css';
import { useState, useRef } from 'react'


export default function Playback() {
    const wrapper = useRef();

    const [isPlaying, setIsPlaying] = useState(false);
    const [speed, setSpeed] = useState(1);
    const [isDragging, setIsDragging] = useState(false);

    const playPauseHandler = () => {
        
    };

    const forwardHandler = (event) => {
        
    };

    const backwardHandler = (event) => {
        
    };

    const revertHandler = (event) => {
        
    };
    
    function decreaseSpeed(event) {
        
    };

    function increaseSpeed(event) {
        
    };

    const changeProgressHandler = (event) => {
        
    };

    // moves element based on top and left positions and their ref
    function moveElement(element, movementX, movementY) {
        let configStyle = window.getComputedStyle(element);
        let configLeft = parseInt(configStyle.left);
        let configTop = parseInt(configStyle.top);
        let leftPosition = configLeft + movementX;
        let topPosition = configTop + movementY;
        element.style.left = `${leftPosition}px`;
        element.style.top = `${topPosition}px`;

        return { x: leftPosition, y: topPosition }
    }

    const handleMouseDown = (event) => {
        if (event.target.type !== undefined) return;
        setIsDragging(() => true);
    };

    const handleMouseMove = ({ movementX, movementY }) => {
        if (!isDragging) return;
        moveElement(wrapper.current, movementX, movementY);
    };

    const handleMouseUp = () => {
        setIsDragging(() => false);
    };


    return (
        <div className="playerContainer" onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} onMouseLeave={handleMouseUp} ref={wrapper}>
            <div className="progressBarWrapper">
                <input
                    className="progressBar"
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    onChange={changeProgressHandler}
                />
            </div>

            <div className="controls">
                <button onClick={revertHandler}>Revert</button>
                <button className="iconButtons" data-action="rewind" onClick={backwardHandler}>«</button>
                <button className="playButton" onClick={playPauseHandler}>{isPlaying ? '||' : 'Play'}</button>
                <button className="iconButtons" data-action="advance" onClick={forwardHandler}>»</button>
            </div>

            <div className="speedWrapper">
                <span className="speedControls">
                    <span className="draggable">{speed.toFixed(2)}</span>
                    <button  onClick={decreaseSpeed} data-action="slower">{String.fromCharCode(45)}</button>
                    <button  onClick={increaseSpeed} data-action="faster">{String.fromCharCode(43)}</button>
                </span>
            </div>

        </div>
    );
};

