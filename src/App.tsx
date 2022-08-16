import React from 'react';
import './styles/App.css';
import './assets/fonts/golostext/golostext.css';
import {BrowserRouter} from "react-router-dom";
import Header from "./components/Header";
import AppRouter from "./components/AppRouter";
import PageLoader from "./components/UI/PageLoader";
import Auth from "./components/Auth";

const App = () => {
    return (
        <BrowserRouter>
            <Header/>
            {/*<Auth/>*/}
            <React.Suspense fallback={<PageLoader/>}>
                <AppRouter/>
            </React.Suspense>
        </BrowserRouter>
    );
};

export default App;
