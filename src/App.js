import logo from './logo.svg';
import './App.css';
import {Books, Songs,BooksHOC, SongsHOC} from './hoc'


function App() {
  return (
    <div className="App">
      <h1>App</h1>
      {/* <Books books={DB.books}></Books>
      <Songs songs={DB.songs}></Songs> */}
      <BooksHOC name='books' theme='dark'></BooksHOC>
      <SongsHOC name='songs'></SongsHOC>

    </div>
  );
}

export default App;
