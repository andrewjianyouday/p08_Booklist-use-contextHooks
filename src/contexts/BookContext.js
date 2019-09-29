/** A context of all of the book data */
import React, { createContext, useState} from 'react';
import uuid from 'uuid/v1'


export const BookContext = createContext();  /* create bookContext */


const BookContextProvider = (props) =>{ /* create Book Context Provider Function to proivde data to compoments */
    /** intial data */
    const [books, setBooks] = useState([     
        {title: 'name of the Land', Author: 'Bjørn', id: 1},
        {title: 'name of the Wind', Author: 'Jianyou', id: 2},
        {title: 'name of the Sea', Author: 'Siri', id: 3}
    ]);

    /** 
     * add new book 
     */
    const addBook = (title, author) =>{
        setBooks([
            ...books, 
            {title: title, author: author, id: uuid()}
        ]);
    }
     /** 
     * remove a book 
     * filter() a callback function 
     * cycling the books array and check 
     * true: id not matches -> keep item in array
     * false: id matches -> remove the item
     */
    const removeBook = (id) =>{
        setBooks(books.filter(book => book.id !== id))
    };
    return (
        <BookContext.Provider value={{books, addBook, removeBook}}>
            {props.children}
        </BookContext.Provider>
    )
}

/**
 * {props.children} : represents the BookContextProivder is going to wrap
 * Thus export BookContextProivder
 */

 export default BookContextProvider