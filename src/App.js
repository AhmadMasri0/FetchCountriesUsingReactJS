import Header from "./components/header/header";
import './components/header/header.module.css';
import Control from "./components/control/control";
import Countries from "./components/countries/countries";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DetailsControl from "./components/control/detailsControl";
import Details from "./components/details/details";

function App() {

    return (
        <div>
            <Header/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={
                        <>
                            <Control/>
                            <Countries/>
                        </>
                    }/>
                    <Route path="/details" element={
                        <>
                            <DetailsControl/>
                            <Details/>
                        </>
                    }/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
