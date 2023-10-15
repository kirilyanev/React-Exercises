import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
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
        <section className="detailsOtherPet">
            <h3>{pet.name}</h3>
            <p>Pet counter: {pet.likes} <a href="#"><button className="button"><i className="fas fa-heart"></i>
                Pet</button></a>
            </p>
            <p className="img"><img src={pet.imageURL} /></p>
            <p className="description">{pet.description}</p>
            <div className="pet-info">
                <Link to={`/pets/details/${pet.id}/edit`}><button className="button">Edit</button></Link>
                <Link to="#"><button className="button">Delete</button></Link>
            </div>
        </section>
    );
};

export default PetDetails;