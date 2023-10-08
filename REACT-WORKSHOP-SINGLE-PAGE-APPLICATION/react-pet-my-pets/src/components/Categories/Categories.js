import React, { useState, useEffect } from "react";
import Pet from "../Pet/Pet.js";
import CategoryNavigation from "./CategoryNavigation/CategoryNavigation.js";
import * as petsService from '../../services/petsService.js';
import { useLocation } from "react-router-dom";

const Categories = (props) => {
    const [pets, setPets] = useState([]);
    const location = useLocation();
    const category = location.pathname.split('/')[2];

    useEffect(() => {
        petsService.getAll()
            .then(res => setPets(res));
    }, []);

    // uncomment this code if you need to update pets based on props changes.
    useEffect(() => {
        petsService.getAll(category)
            .then(res => setPets(res));
    }, [category]);
    

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
};

export default Categories;
