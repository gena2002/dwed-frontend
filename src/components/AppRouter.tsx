import React, {useContext, useMemo} from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router";
import {observer} from "mobx-react-lite";
import {Context} from "../context";

const AppRouter = () => {
    const {store} = useContext(Context);

    function render(routes: any) {
        return (
            routes.map((route: any) =>
                <Route
                    element={route.element}
                    path={route.path}
                    key={route.path}
                />
            )
        )
    }

    return (<>
            <Routes>
                {store.isAuth && render(privateRoutes)}
                {render(publicRoutes)}
                <Route path={`*`} element={<div>Error</div>}/>
            </Routes>
        </>

    );
};

export default observer(AppRouter);