// import { createBrowserHistory } from '@remix-run/router';
import * as petService from '../../services/petsService.js';
import { useNavigate } from 'react-router-dom';

const CreatePet = () => {
    // const history = createBrowserHistory();
    const navigate = useNavigate();

    const onCreatePetSubmitHandler = (e) => {
        e.preventDefault();

        const {name, description, imageURL, category} = e.target;

        petService.create(name.value, description.value, imageURL.value, category.value)
            .then(() => {
                // history.push('/');
                navigate('/');
            });

    };

    return (
        <section className="create">
        <form onSubmit={onCreatePetSubmitHandler}>
            <fieldset>
                <legend>Add new Pet</legend>
                <p className="field">
                    <label htmlFor="name">Name</label>
                    <span className="input">
                        <input type="text" name="name" id="name" placeholder="Name" />
                        <span className="actions"></span>
                    </span>
                </p>
                <p className="field">
                    <label htmlFor="description">Description</label>
                    <span className="input">
                        <textarea rows="4" cols="45" type="text" name="description" id="description"
                            placeholder="Description"></textarea>
                        <span className="actions"></span>
                    </span>
                </p>
                <p className="field">
                    <label htmlFor="image">Image</label>
                    <span className="input">
                        <input type="text" name="imageURL" id="image" placeholder="Image" />
                        <span className="actions"></span>
                    </span>
                </p>
                <p className="field">
                    <label htmlFor="category">Category</label>
                    <span className="input">
                        <select type="text" name="category">
                            <option value="Cats">Cat</option>
                            <option value="Dogs">Dog</option>
                            <option value="Parrots">Parrot</option>
                            <option value="Reptiles">Reptile</option>
                            <option value="Others">Other</option>
                        </select>
                        <span className="actions"></span>
                    </span>
                </p>
                <input className="button submit" type="submit" value="Add Pet" />
            </fieldset>
        </form>
    </section>
    );
};

export default CreatePet;