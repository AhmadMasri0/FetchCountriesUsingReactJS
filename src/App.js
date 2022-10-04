import Header from "./components/header/header";
import './components/header/header.module.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/home";
import Details from "./pages/details";
import {useEffect, useState} from "react";

function App() {

    const [isDarkMode, setIsDarkMode] = useState(JSON.parse(localStorage.getItem('darkMode')));

    useEffect(()=>{
        document.body.style.backgroundColor = isDarkMode ? '#202c37' : '#F8F9FAFF';
    }, [isDarkMode])
    return (
            <Router basename={'/reactTraining'}>
                <Header darkMode={isDarkMode} darkModeHandler={setIsDarkMode}/>
                <Routes>
                    <Route path="/" exact element={
                        <Home darkMode={isDarkMode}/>
                    }/>
                    <Route path="/details/:id" element={
                        <Details darkMode={isDarkMode}/>
                    }/>
                </Routes>
            </Router>

    );
}

export default App;
