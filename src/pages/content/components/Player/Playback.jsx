//import '@pages/content/components/Player/playback.css';
import { useState, useEffect, useRef } from 'react'
import PlayIcon from './icons/PlayIcon'
import ForwardIcon from './icons/ForwardIcon'
import BackwardIcon from './icons/BackwardIcon'
import PauseIcon from './icons/PauseIcon'
import TurnOffIcon from './icons/TurnOffIcon'


export default function Playback() {
    const wrapper = useRef();
    const sliderRef = useRef();

    const [isPlayerVisible, setIsPlayerVisible] = useState(false);

    const [text, setText] = useState('');
    const [isPlaying, setIsPlaying] = useState(false);
    const [speed, setSpeed] = useState(1);
    const [isSpeedInputVisible, setSpeedInputVisible] = useState(false);
    const [speakerProgress, setSpeakerProgress] = useState(0);
    const [duration, setDuration] = useState(9);

    const [isDragging, setIsDragging] = useState(false);

    useEffect(() => {

    }, [])

    const playPauseHandler = () => {
        setIsPlaying(() => !isPlaying);
    };

    const backwardHandler = (event) => {
        
    };

    const forwardHandler = (event) => {
        
    };

    const toggleSpeedInput = (event) => {
        setSpeedInputVisible(() => !isSpeedInputVisible);
    }

    const handleSpeedChange = (event) => {
        
    };

    const changeProgressHandler = (event) => {
        if (!sliderRef.current) return;
        setSpeakerProgress(() => parseFloat(event.target.value));
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
        <div className={`
                ${isPlayerVisible ? 'flex' : 'hidden'}
                fixed top-[777px] left-[888px] z-50 w-[275px] flex flex-col
                justify-center bg-[#151520] rounded-[11px]
                border-[1px] border-[solid] border-[rgba(0,0,0,1)] text-[white]
            `}
                onMouseDown={handleMouseDown} 
                onMouseMove={handleMouseMove} 
                onMouseUp={handleMouseUp} 
                onMouseLeave={handleMouseUp} 
                ref={wrapper}
            >
            {isSpeedInputVisible ? (
                <div
                    className={
                        `${isSpeedInputVisible ? 'block max-h-[900px]' : 'hidden max-h-[0px]'}
                        flex flex-col justify-center [transition:250ms_ease-in-out_max-height] overflow-hidden
                        
                        `
                    }
                >
                    <span className='flex items-center justify-center' >Select Speed</span>
                    <div className='flex items-center justify-center' >
                        <input
                            className="appearance-none cursor-pointer outline-none border-0 relative flex items-center h-[2px] w-3/5 accent-gray-500 bg-gray-300"
                            type="range"
                            step="0.01"
                            min="0.5"
                            max="4.5"
                            value={speed}
                            onChange={handleSpeedChange}
                        />
                        <span className='ml-[11px]' >
                            {speed.toFixed(2)}x
                        </span>
                    </div>
                </div>
            )
            : 
            (
                <div className={`${isSpeedInputVisible ? 'max-h-[0px]' : 'max-h-[900px]'} flex items-end justify-end mt-[8px] [transition:250ms_ease-in-out_max-height] overflow-hidden rounded-[10px]`} >
                    <TurnOffIcon className='cursor-pointer flex items-center justify-center mr-[20px]' width="22px" height="22px" fill="#000000" />
                </div>
            )
        }

            <div className='flex flex-col justify-center m-[15px]' >

                <div className='flex items-center' >
                    <div className='min-w-[40px] text-sm text-center mr-[8px]'>{speakerProgress.toFixed(2)}</div>
                    <div className="relative bg-gray-300 w-4/5 rounded">
                        <div  className='absolute top-0 left-0 bg-[#bbbbbb] h-2 rounded-l-md'></div>
                        <input
                            ref={sliderRef}
                            className="appearance-none cursor-pointer outline-none border-0
                                relative flex items-center h-[2px] w-full
                                accent-gray-500 bg-gray-300
                            "
                            type="range"
                            min="0"
                            max={duration.toFixed(2)}
                            value={speakerProgress}
                            step="0.01"
                            onChange={changeProgressHandler}
                        />
                    </div>
                    <div className='min-w-[33px] ml-[8px] text-sm text-center'>{duration.toFixed(2)}</div>
                </div>

                <div className="flex flex-row justify-center items-center gap-[10px] min-w-[48px] ml-[0] mr-[0] my-[2px]">
                    <button className="text-[18px] cursor-pointer bg-[#151520]" data-action="rewind" onClick={backwardHandler}>
                        <BackwardIcon width={"33px"} height={"33px"} fill={"#ffffff"} />
                    </button>
                    <button className="border-[1px] border-[solid] border-[#ffffff] rounded-[50%] w-[48px] pl-[12px] py-[8px] cursor-pointer bg-[#151520] text-[#fff]" onClick={playPauseHandler}>
                        {isPlaying ?
                        <PauseIcon width="22px" height="22px" fill="#ffffff" />
                        : <PlayIcon className='ml-[2px]' width="22px" height="22px" fill="#ffffff" />}
                    </button>
                    <button className="text-[18px] cursor-pointer bg-[#151520]" data-action="advance" onClick={forwardHandler}>
                        <ForwardIcon width={"33px"} height={"33px"} fill={"#ffffff"} />
                    </button>
                    
                    <span className="flex flex-row items-center text-sm gap-[10px] m-[5px] cursor-pointer duration-300 ease-in-out" onClick={toggleSpeedInput}>
                        <span className="">{speed.toFixed(2)}x</span>
                    </span>
                </div>

            </div>

        </div>
    );
};

