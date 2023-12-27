import Lorem from "./Lorem";
import HomePage from "../pages/HomePage";
import SignIn from "../componnents/forms/signIn-Up/SignIn";
import SignUp from "../componnents/forms/signIn-Up/signUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Terms from "./Terms";

const Body = ()=>{
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/signin" element={<SignIn/>}/>
                    <Route path="/signup" element={<SignUp/>}/>
                    <Route path="/lory" element={<Lorem/>}/>
                    <Route path="/terms" element={<Terms/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default Body;