/** A context of all of the book data */
import React, { createContext, useState, useReducer, useEffect} from 'react';
import uuid from 'uuid/v1'
import { bookReducer } from '../reducers/bookReducer';


export const BookContext = createContext();  /* create bookContext */

const BookContextProvider = (props) =>{ /* create Book Context Provider Function to proivde data to compoments */
    /** intial data 
     * get location storage data if it exists
    */
    const [books, dispatch] = useReducer(bookReducer, [], () =>{
        const localData = localStorage.getItem('books');
        return localData ? JSON.parse(localData): [];
    });

    /** 
     * LocalStorage here
     * it runs whenver [books] data changes */
    useEffect(()  =>{
        localStorage.setItem('books', JSON.stringify(books))
    },[books])


    /** 
     * add new book 
     */
    // const addBook = (title, author) =>{
    //     setBooks([
    //         ...books, 
    //         {title: title, author: author, id: uuid()}
    //     ]);
    // }
     /** 
     * remove a book 
     * filter() a callback function 
     * cycling the books array and check 
     * true: id not matches -> keep item in array
     * false: id matches -> remove the item
     */
    // const removeBook = (id) =>{
    //     setBooks(books.filter(book => book.id !== id))
    // };
    return (
        <BookContext.Provider value={{books, dispatch}}>
            {props.children}
        </BookContext.Provider>
    )
}

/**
 * {props.children} : represents the BookContextProivder is going to wrap
 * Thus export BookContextProivder
 */

 export default BookContextProvider