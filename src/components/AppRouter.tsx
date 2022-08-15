import React, {useContext, useMemo} from "react";
// import {AuthContext} from "../context";
import {Navigate, Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router";

const AppRouter = () => {
    // const {isAuth, isLoading} = useContext(AuthContext);

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

    // function accessRoutes(privateRoutes:any, publicRoutes:any) {
    //     if (isAuth) return render(privateRoutes)
    //     return render(publicRoutes)
    // }
    //
    //
    // if (isLoading) return <div>Загрузка...</div>

    return (<>
            <Routes>
                {render(privateRoutes)}
                {/*{accessRoutes(privateRoutes, publicRoutes)}*/}
                {/*<Route exact path={`/`} element={<Home/>}/>*/}
                {/*<Route exact path={`/faq`} element={<FAQ/>}/>*/}
                {/*<Route path={`*`} element={<Error/>}/>*/}
            </Routes>
        </>

    );
};

export default AppRouter;