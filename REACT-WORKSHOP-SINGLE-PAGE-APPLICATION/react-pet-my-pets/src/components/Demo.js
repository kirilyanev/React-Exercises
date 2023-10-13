import React, { Component } from 'react';
import './Demo.css';

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
            errors: {
                email: false
            }
        };

        this.emailInput = React.createRef();

        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    onSubmitHandler(e) {
        e.preventDefault();

        const { username, age } = this.state;
        console.log(this.state);

        if (!this.emailInput.current.value.includes('@')) {

            this.setState({errors: {email: true}});
            this.emailInput.current.value = '';
            this.emailInput.current.focus();
        }
    }

    onChangeHandler(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    render () {
        return (
            <div>
                <h1>Demo Form</h1>

                <form>
                    <label htmlFor='username'>Username</label>
                    <input
                        type="text"
                        id='username'
                        name="username"
                        value={this.state.username}
                        onChange={this.onChangeHandler}
                    />

                    <label htmlFor='email'>Email</label>
                    <input
                        ref={this.emailInput}
                        type="email"
                        id="email"
                        name="email"
                        placeholder="example@pesho.com"
                    />
                    <div
                        className={`input-validation ${this.state.errors.email && 'show'}`}>Invalid Email!
                    </div>

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