import React, {useContext, useEffect} from 'react';
import './styles/App.css';
import './assets/fonts/golostext/golostext.css';
import {BrowserRouter} from "react-router-dom";
import Header from "./components/Header";
import AppRouter from "./components/AppRouter";
import PageLoader from "./components/UI/PageLoader";
import Store from "./store/store";
import {Context} from './context';
import {observer} from "mobx-react-lite";

const App = () => {
        const {store} = useContext(Context);
        useEffect(() => {
            // console.log('store.isAuth', store.isAuth)
            store.getAccount()
        }, [store.isAuth])

        // useEffect(() => {
        //     console.log(store.isLoading)
        // }, [store.isLoading])


        if (store.isAuth === null) return <PageLoader/>

        try {
            return (<>
                    <Header/>
                    <React.Suspense fallback={<PageLoader/>}>
                        <AppRouter/>
                    </React.Suspense>
                </>
            );
        } catch (e: any) {
            return <></>
        }
    }
;

export default observer(App);
