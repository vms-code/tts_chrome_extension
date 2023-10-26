import { useState, useRef } from 'react'
import PlayIcon from './icons/PlayIcon';

export default function Playback() {
    const wrapper = useRef();

    const [text, setText] = useState('');
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
        <div className="
                
            "
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            ref={wrapper}
        >
            <div class="container">
                <div class="top-icons">
                    <i class="fas fa-random" title="shuffle"></i>
                    <i class="far fa-hand-point-left" title="previous"></i>
                    <PlayIcon width={"800px"} height={"800px"} fill={"#000000"} />
                    <i class="far fa-hand-point-right" title="next"></i>
                    <i class="fas fa-redo" title="repeat"></i>
                </div>
                <div class="bar-1"></div>
                <div class="bar-2"></div>
                <div class="bar-text">
                    <span title="current">1:01</span><span title="end">3:35</span>
                </div>
                <div class="bar-circle" title="1:01"></div>
                <div class="bottom-icons">
                    <i class="far fa-heart" title="like"></i>
                    <i class="fas fa-heart-broken" title="dislike"></i>
                </div>
                <div class="circle-1"></div>
                <div class="circle-2"></div>
            </div>

        </div>
    );
};

