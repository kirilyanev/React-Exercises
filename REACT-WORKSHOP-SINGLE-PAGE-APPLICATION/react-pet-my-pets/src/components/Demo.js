import { Component } from 'react';

const options = [
    {label: 'IT', value: 'it'},
    {label: 'Engineer', value: 'engineer'},
    {label: 'Unemployed', value: 'unemployed'},
];

class Demo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: 'Pesho',
            age: 18,
            bio: 'Lorem Ipsum',
            occupation: 'unemployed',
        };

        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    onSubmitHandler(e) {
        e.preventDefault();

        const { username, age } = this.state;

        console.log(username);
        console.log(age);
    }

    onChangeHandler(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    render () {
        return (
            <div>
                <h1>Demo Form</h1>

                <form onSubmit={this.onSubmitHandler}>
                    <label htmlFor='username'>Username</label>
                    <input
                        type="text"
                        id='username'
                        name="username"
                        value={this.state.username}
                        onChange={this.onChangeHandler}
                    />

                    <label htmlFor='age'>Age</label>
                    <input
                        type="number"
                        id='age'
                        name="age"
                        value={this.state.age}
                        onChange={this.onChangeHandler}
                    />

                    <label htmlFor='bio'>Bio</label>
                    <textarea name='bio' onChange={this.onChangeHandler} value={this.state.bio}></textarea>

                    <label htmlFor='occupation'></label>
                    <select
                        name="occupation"
                        id="occupation"
                        onChange={this.onChangeHandler}
                        value={this.state.occupation}
                    >
                        {options.map(x =>
                            <option key={x.value} value={x.value}>{x.label}</option>    
                        )}
                    </select>

                    <input type="file" name="upload-picture" />
                    <input type="submit" value="Send" onClick={this.onSubmitHandler.bind(this)} />
                </form>
            </div>
        );

    }

}

export default Demo;