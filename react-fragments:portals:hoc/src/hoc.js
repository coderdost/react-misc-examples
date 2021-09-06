import { getAllByPlaceholderText } from '@testing-library/dom';
import './App.css';

const DB = {
    books: [
        {title: "Harry Potter", author:'Rowling'},
        {title: "Outlier", author:'Gladwell'}
    ],
    songs: [
        {title: "Du Hast", album:'Sehnsucht'},
        {title: "Desert Rose", album:'Brand new day'}
    ]
  };


const Books  =  ({books})=>{
    return (
        <div>
             <h1>Books</h1>
        <ul>
            {books.map(book=><li>Book: {book.title} / Author: {book.author}</li>)}
        </ul>
        </div>
       
    )
}

const Songs  =  ({songs})=>{
    return (
        <div>
        <h1>Songs</h1>
        <ul>
            {songs.map(song=><li>Book: {song.title} / Album: {song.album}</li>)}
        </ul>
   </div>
    )
}

const withHOC = (Component, getData)=>{
    return (props)=>(
        <div className={props.theme}>
         <Component {...getData(props.name)} ></Component>
        </div>)
}

const BooksHOC = withHOC(Books,(name)=>({[name]:DB[name]}))
const SongsHOC = withHOC(Songs,(name)=>({[name]:DB[name]}))


  export {Books, Songs, BooksHOC, SongsHOC}