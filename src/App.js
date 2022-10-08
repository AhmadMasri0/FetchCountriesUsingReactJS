import Header from "./components/header/header";
import './components/header/header.module.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/home";
import Details from "./pages/details";
import {CountriesContextProvider} from "./store/countries-context";

function App() {

    return (
        <Router basename={'/reactTraining'}>
            <Header/>
            <Routes>
                <Route path="/" exact element={
                    <CountriesContextProvider>
                        <Home/>
                    </CountriesContextProvider>
                }/>
                <Route path="/details/:id" element={
                    <Details/>
                }/>
            </Routes>

        </Router>
    );
};

export default App;
