import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import * as petsService from '../../services/petsService.js';

const EditPetDetails = () => {
    const location = useLocation();
    const id = location.pathname.split('/')[3];

    const [pet, setPet] = useState({});

    useEffect(() => {
        petsService.getOne(id)
            .then(res => setPet(res));
    }, []);

    const onDescriptionSaveSubmit = (e) => {
        e.preventDefault();
        console.log(e.target);
    };

    return (
        <section className="detailsMyPet">
        <h3>{pet.name}</h3>
        <p>Pet counter: <i className="fas fa-heart"></i> {pet.likes}</p>
        <p className="img"><img src={pet.imageURL} /></p>
        <form onSubmit={onDescriptionSaveSubmit}>
            <textarea type="text" name="description" defaultValue={pet.description}></textarea>
            <button className="button"> Save</button>
        </form>
    </section>
    );
};

export default EditPetDetails;