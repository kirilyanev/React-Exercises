import React, { useState, useEffect } from "react";
import Pet from "../Pet/Pet.js";
import CategoryNavigation from "./CategoryNavigation/CategoryNavigation.js";
import * as petsService from '../../services/petsService.js';
import { useParams, useSearchParams } from "react-router-dom";

const Categories = () => {
    const [pets, setPets] = useState([]);
    const searchParams = useSearchParams();

    useEffect(() => {
        petsService.getAll()
            .then(res => setPets(res));
    }, []);
    
    // useEffect(() => {
    //     petsService.getAll(props.match.params.category)
    //         .then(res => setPets(res));
    // }, [props.match.params.category]);

    return (
        <section className="dashboard">
            <h1>Dashboard</h1>
            <CategoryNavigation />
            <ul className="other-pets-list">
                {pets.map(x => 
                    <Pet key={x.id} {...x} />
                )}
            </ul>
        </section>
    );
}

export default Categories;
