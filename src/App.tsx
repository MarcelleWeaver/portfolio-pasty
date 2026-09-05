
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMe from "./aboutMe";
import Art from "./art";
import Design from "./design";
import { HashRouter } from "react-router-dom";


function App() {
    console.log("loaded root")
    return (
        <div className="App">
            <p>wawawawa</p>
            <HashRouter>
                <Routes>
                    <Route  path="/" element={<Art />} />
                    <Route  path="/art" element={<Art />} />

                    <Route  path="/design" element={<Design />} />
                    <Route  path="/aboutMe" element={<AboutMe />} />
                </Routes>
            </HashRouter>
        </div>
    );
}

export default App;