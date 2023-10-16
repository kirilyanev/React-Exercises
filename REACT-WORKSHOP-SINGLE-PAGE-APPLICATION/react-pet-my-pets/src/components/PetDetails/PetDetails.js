import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import * as petsService from '../../services/petsService.js';

const PetDetails = () => {
    const location = useLocation();
    const id = location.pathname.split('/')[3];

    let [pet, setPet] = useState({});

    // Class component syntax
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         pet: {},
    //     }
    // }

    useEffect(() => {
        petsService.getOne(id)
            .then(res => setPet(res));
    }, []);

    // Class component syntax
    // ComponentDidMount() {
    //     petsService.getOne(id)
    //     .then(res => this.setState({pet: res}));
    // }

    const onPetButtonClickHandler = () => {
        let incrementedLikes = pet.likes + 1;

        petsService.pet(id, incrementedLikes)
            .then((updatedPet) => {
                setPet(state => ({...state, likes: Number(updatedPet.likes)}));
            });
    };

    return (
        <section className="detailsOtherPet">
            <h3>{pet.name}</h3>
            <p>Pet counter: {pet.likes}
                <button className="button" onClick={onPetButtonClickHandler}>
                    <i className="fas fa-heart"></i>Pet
                </button>
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