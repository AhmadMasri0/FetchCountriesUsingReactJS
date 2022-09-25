import Header from "./components/header/header";
import './components/header/header.module.css';
import Container from "./components/inputs/container";
import Countries from "./components/countries/countries";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ButtonContainer from "./components/inputs/buttonContainer";
import Details from "./components/details/details";

function App() {

    return (
        <div>
            <Header/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={
                        <>
                            <Container/>
                            <Countries/>
                        </>
                    }/>
                    <Route path="/details" element={
                        <>
                            <ButtonContainer/>
                            <Details/>
                        </>
                    }/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
