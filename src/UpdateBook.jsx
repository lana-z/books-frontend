
import React, {useState, useEffect} from 'react';

function UpdateBook(props) {

    const [book, setBook] = useState({});

    function handleChange(e) {
        setBook({...book, [e.target.name]: e.target.value});
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.handleSubmit(book);
        e.target.reset();
        setBook({title:'', description:''});
    }

    useEffect( () => {
        console.log("updated book");
        setBook(props.book || {});
    }, [props.book])

    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} name="title" value={book.title}/>
            <input onChange={handleChange} name="description" value={book.description}/>
            <button type="submit">Update Book</button>
        </form>
    )
}

export default UpdateBook;