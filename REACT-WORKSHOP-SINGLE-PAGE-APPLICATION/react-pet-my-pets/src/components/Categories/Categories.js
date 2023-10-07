import { Component } from "react";
import Pet from "../Pet/Pet.js";
import CategoryNavigation from "./CategoryNavigation/CategoryNavigation.js";
import * as petsService from '../../services/petsService.js';

class Categories extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            pets: []
        };
    }

    componentDidMount() {
        petsService.getAll()
            .then(res => this.setState({ pets: res}));
    }

    componentDidUpdate() {
        // console.log(this.props);
        // petsService.getAll(this.props.match.params.category)
        //     .then(res => this.setState({ pets: res }));
    }



    render() {
        return (
            <section className="dashboard">
                <h1>Dashboard</h1>

                <CategoryNavigation />

                <ul className="other-pets-list">
                    {this.state.pets.map(x => 
                    <Pet key={x.id} {...x} />
                    )}
                </ul>
            </section>
        );
    }
};

export default Categories;