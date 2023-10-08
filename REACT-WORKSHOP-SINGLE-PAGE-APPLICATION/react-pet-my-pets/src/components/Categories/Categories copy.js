// import React, { useState, useEffect } from "react";
// import Pet from "../Pet/Pet.js";
// import CategoryNavigation from "./CategoryNavigation/CategoryNavigation.js";
// import * as petsService from '../../services/petsService.js';
// import { useLocation } from "react-router-dom";

// const Categories = (props) => {
//     const [pets, setPets] = useState([]);
//     const location = useLocation();
//     const category = location.pathname.split('/')[2];

//     useEffect(() => {
//         petsService.getAll()
//             .then(res => setPets(res));
//     }, []);

//     // You can uncomment this code if you need to update pets based on props changes.
//     // useEffect(() => {
//     //     petsService.getAll(props.match.params.category)
//     //         .then(res => setPets(res));
//     // }, [props.match.params.category]);
    
//     console.log(category);

//     return (
//         <section className="dashboard">
//             <h1>Dashboard</h1>

//             <CategoryNavigation />

//             <ul className="other-pets-list">
//                 {pets.map(x => 
//                     <Pet key={x.id} {...x} />
//                 )}
//             </ul>
//         </section>
//     );
// };

// export default Categories;





import { Component } from "react";
import Pet from "../Pet/Pet.js";
import CategoryNavigation from "./CategoryNavigation/CategoryNavigation.js";
import * as petsService from '../../services/petsService.js';
import { useSearchParams } from "react-router-dom";

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