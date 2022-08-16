import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Store from "./store/store";
import {BrowserRouter} from "react-router-dom";
import {Context} from './context';
import PageLoader from "./components/UI/PageLoader";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
const store = new Store();

root.render(
    // <React.StrictMode>
        <React.Suspense fallback={<PageLoader/>}>
            <BrowserRouter>
                <Context.Provider value={{store}}>
                    <App/>
                </Context.Provider>
            </BrowserRouter>
        </React.Suspense>
    // </React.StrictMode>
);
