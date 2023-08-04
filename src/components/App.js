import Header from './Header';
import './App.css';
import Footer from './Footer';
import Note from './Note';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //   <Header />

    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <Header />
      <Note />
      <Footer />
    </div>

  );
}

export default App;
