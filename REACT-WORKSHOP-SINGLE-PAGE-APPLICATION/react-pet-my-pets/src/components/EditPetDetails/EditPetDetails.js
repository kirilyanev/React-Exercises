import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as petsService from '../../services/petsService.js';
import InputError from '../Shared/InputError/InputError.js';

import isAuth from '../../hoc/isAuth.js';

const EditPetDetails = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const id = location.pathname.split('/')[3];

    const [pet, setPet] = useState({});
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        petsService.getOne(id)
            .then(res => setPet(res));
    }, []);

    const onDescriptionSaveSubmit = (e) => {
        e.preventDefault();
        console.log(e.target);

        let updatedPet = {...pet, description: e.target.description.value};

        petsService.update(id, updatedPet)
            .then(() => {
                navigate(`/pets/details/${id}`);
                return;
            });
    };

    const onDescriptionChangeHandler = (e) => {
        console.log(e.target.value);
        if (e.target.value.length < 10) {
            setErrorMessage('Description too short');
        } else {
            setErrorMessage('');
        }
    };

    return (
        <section className="detailsMyPet">
        <h3>{pet.name}</h3>
        <p>Pet counter: <i className="fas fa-heart"></i> {pet.likes}</p>
        <p className="img"><img src={pet.imageURL} /></p>
        <form onSubmit={onDescriptionSaveSubmit}>
            <textarea type="text" name="description" onBlur={onDescriptionChangeHandler} defaultValue={pet.description}></textarea>
            <InputError>{errorMessage}</InputError>
            <button className="button"> Save</button>
        </form>
    </section>
    );
};

export default isAuth(EditPetDetails);