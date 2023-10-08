import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import * as petsService from '../../services/petsService.js';

const PetDetails = () => {
    const location = useLocation();
    const id = location.pathname.split('/')[3];

    let [pet, setPet] = useState({});

    useEffect(() => {
        petsService.getOne(id)
        .then(res => setPet(res));
    }, []);

    return (
        <section class="detailsOtherPet">
            <h3>{pet.name}</h3>
            <p>Pet counter: {pet.likes} <a href="#"><button class="button"><i class="fas fa-heart"></i>
                Pet</button></a>
            </p>
            <p class="img"><img src={pet.imageURL} /></p>
            <p class="description">{pet.description}</p>
        </section>
    );
};

export default PetDetails;