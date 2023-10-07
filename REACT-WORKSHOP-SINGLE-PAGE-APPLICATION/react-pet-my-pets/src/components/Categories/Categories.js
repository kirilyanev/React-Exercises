import { Component } from "react";
import Pet from "../Pet/Pet.js";
import CategoryNavigation from "./CategoryNavigation/CategoryNavigation.js";

class Categories extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pets: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:5000/pets')
        .then(res => res.json())
        .then(res => this.setState({pets: res}))
        .catch(error => console.log(error));
    }

    render() {
        console.log(this.state.pets);

        return (
            <section className="dashboard">
                <h1>Dashboard</h1>

                <CategoryNavigation />

                <ul className="other-pets-list">

                </ul>
            </section>
        );
    }
};

export default Categories;