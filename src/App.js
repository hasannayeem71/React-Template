import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <div className="App">
      <h1>React Router is also setup for you</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;

function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>Run
          <code style={{backgroundColor:"black",color:'white'}}>yarn generate YourComponentName</code> to create a new component.</p> 
      </main>
      <nav>
        <Link className="App-link" to="/about">
          About
        </Link>
      </nav>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Read About this template</h2>
      </main>
      <nav>
        <a
          style={{ marginRight: 20 }}
          className="App-link"
          target="_blank"
          href="https://github.com/hasannayeem71/React-Template#readme"
          rel="noreferrer"
        >
          DOCS
        </a>
        <Link className="App-link" to="/">
          Back To Home
        </Link>
      </nav>
    </>
  );
}
