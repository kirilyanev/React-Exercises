
const PetFormView = ({
    onSubmitHandler,
    petName,
    setPetName,
    petDescription,
    setPetDescription,
    petImg,
    setPetImg
}) => {
    return (
        <section className="create">
        <form onSubmit={onSubmitHandler}>
            <fieldset>
                <legend>Add new Pet</legend>
                <p className="field">
                    <label htmlFor="name">Name</label>
                    <span className="input">
                        <input type="text" name="name" value={petName} onChange={(e) => setPetName(e.target.value)} id="name" placeholder="Name" />
                        <span className="actions"></span>
                    </span>
                </p>
                <p className="field">
                    <label htmlFor="description">Description</label>
                    <span className="input">
                        <textarea rows="4" cols="45" type="text" name="description" value={petDescription} onChange={(e) => setPetDescription(e.target.value)} id="description"
                            placeholder="Description"></textarea>
                        <span className="actions"></span>
                    </span>
                </p>
                <p className="field">
                    <label htmlFor="image">Image</label>
                    <span className="input">
                        <input type="text" name="imageURL" value={petImg} onChange={(e) => setPetImg(e.target.value)} id="image" placeholder="Image" />
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

export default PetFormView;