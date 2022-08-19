import {Settings, Home, Registration} from "../pages";

export const privateRoutes = [
    {path: '/settings/*', element: <Settings/>},
    {path: '/profile/*', element: <Settings/>},
]

export const publicRoutes = [
    {path: '/', element: <Home/>},
    {path: '/signup', element: <Registration/>},
]

