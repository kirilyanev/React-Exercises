function Book(props) {
    return (
        <article onClick={() => console.log(`${props.title} is clicked!`)}>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </article>
    );
}

export default Book;