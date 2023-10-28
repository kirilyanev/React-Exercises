import React, { useState, useEffect } from "react";
import PetCard from "../PetCard/PetCard.js";
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

        // if (Math.random() > 0.7) {
        //     throw new Error('Something went wrong!');
        // }
    }, []);

    // uncomment this code if you need to update pets based on props changes.
    useEffect(() => {
        petsService.getAll(category)
            .then(res => setPets(res));
    }, [category]);
    
    const onPetButtonClickHandler = (petId, likes) => {
        petsService.pet(petId, likes + 1)
            .then((result) => {
                setPets((prevPets) => prevPets.map((pet) => pet.id === petId ? { ...pet, likes: result.likes} : pet));
                console.log(result);
            });
    };

    return (
        <section className="dashboard">
            <h1>Dashboard</h1>

            <CategoryNavigation />

            <ul className="other-pets-list">
                {pets.map(x => 
                    <PetCard key={x.id} {...x} onPetButtonClickHandler={onPetButtonClickHandler.bind(this, x.id, x.likes)} />
                )}
            </ul>
        </section>
    );
};

export default Categories;
