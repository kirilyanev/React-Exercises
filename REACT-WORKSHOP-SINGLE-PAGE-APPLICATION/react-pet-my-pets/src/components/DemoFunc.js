import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import useFetch from "../hooks/useFetch.js";

const DemoFunc = () => {
    // const [state, setState] = useState({
    //     count: 11,
    //     step: 1,
    // });

    const [count, setCount] = useState(1);
    const [step, setStep] = useState(1);
    // const [character, setCharacter] = useState({name: 'nobody'});
    const [character, isCharacterLoading] = useFetch(`http://swapi.dev/api/people/${step}`, {});

    // useEffect(() => {
    //     fetch(`http://swapi.dev/api/people/${step}`)
    //         .then(res => res.json())
    //         .then(result => setCharacter(result));
    // }, [step]);


    // ComponentWillUnmount -> useEffect with empty [] useEffect(()=>{}, [])
    useEffect(() => {
        return () => {
            console.log('ComponentWillUnmount');
        };
    }, []);

    
    const onCounterButtonClickHandler = () => {
        // setState(oldState => ({...oldState, count: oldState.count + oldState.step}));
        setCount(oldState => oldState + step);
    };

    const onStepSelectChangeHandler = (e) => {
        const stepValue = Number(e.target.value);

        // setState(oldState => ({...oldState, step: stepValue}));
        setStep(stepValue);
    };

    return (
        <div>
            <h1>{isCharacterLoading ? 'Loading...' : `${character.name}'s Counter`}</h1>
            {/* <div>{state.count}</div> */}
            <div>{count}</div>
            <button onClick={onCounterButtonClickHandler}>Increment</button>
            <label htmlFor="step">Step</label>
            <select name="step" id="step" onChange={onStepSelectChangeHandler}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
            <div>
                <Link to="/">Home</Link>
            </div>
        </div>
    );
};

export default DemoFunc;