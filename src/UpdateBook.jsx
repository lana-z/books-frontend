
import React, {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';

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
        <>
        <div>
            If you'd like to update a book, click on the book title or description.            
        </div>
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} name="title" value={book.title}/>
            <input onChange={handleChange} name="description" value={book.description}/>
            {/* <button type="submit">Update Book</button> */}
            <Button 
                className="Updatebutton"
                variant="outline-secondary" 
                as="input" type="submit" value="Update Book"></Button>{' '}
        </form>
        </>
    )
}

export default UpdateBook;