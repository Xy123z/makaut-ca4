import { useState, useEffect } from 'react';

export default function Timer(props){
    const [seconds, setSeconds] = useState(props.seconds);
    const [minutes, setMinutes] = useState(props.minutes); // Fixed: was props.totalMinutes

    useEffect(() => {
        const interval = setInterval(() => {
            if(seconds === 0){
                if(minutes === 0){
                    clearInterval(interval);
                    props.updateModalText("time's up, the exam has ended", "exam_end")
                    return;
                }
                setSeconds(59);
                setMinutes(prev => prev - 1);
            } else {
                setSeconds(prev => prev - 1); // Just this, NO do-while loop!
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [seconds, minutes]);

    return(
        <>
            <style>
            {`
                .timer{
                    background-color: var(--bs-primary);
                    color: white;
                    border: none;
                    padding: 3px;
                    border-radius: 4px;
                    margin-left: 50px;
                    margin-top: 5px;
                }
            `}
            </style>
            <p className="timer">
                time remaining: {minutes} minutes : {seconds} seconds
            </p>
        </>
    );
}
