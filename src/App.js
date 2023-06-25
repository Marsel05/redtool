import './App.css';
import ToDo from "./components/ToDo";
import Header from "./components/Header";
import Product from "./Product";

function App() {
    return (
        <div className="App">
            <Header/>
            <ToDo/>
            <Product/>
        </div>
    );
}

export default App;
