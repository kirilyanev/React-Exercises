
const DemoFunc = () => {

    const onCounterButtonClickHandler = () => {
        console.log('increase');
    };


    return (
        <div>
            <h1>Counter</h1>
            <div>0</div>
            <button onClick={onCounterButtonClickHandler}>Increment</button>
        </div>
    );
};

export default DemoFunc;