import React,{useState} from 'react';
import ThemeContext from "./Context/ThemeContext";
import Header from "./Components/header";
import HeroSection from "./Components/HeroSection";
const App = () => {
    const ThemeHook = useState("dark");
    return (
        <ThemeContext.Provider value={ThemeHook}>
            <div>
                <Header />
                <HeroSection/>
            </div>
        </ThemeContext.Provider>
    )
}

export default App