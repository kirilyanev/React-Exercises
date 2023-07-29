const domElement = document.getElementById('root');

// const reactElement = React.createElement(
//     'header',
//     {},
//     React.createElement('h1', {}, 'Hello From React Element'),
//     React.createElement('h2', {}, 'The Best Framework Ever'),
// );

const reactJsxElement = (
    <header>
        <h1>Hello From React Element</h1>
        <h2>The Best Framework Ever</h2>
    </header>
);

ReactDOM.render(reactJsxElement, domElement);
