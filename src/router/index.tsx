import {Settings, Home} from "../pages";

export const privateRoutes = [
    {path: '/settings/*', element: <Settings/>},
]

export const publicRoutes = [
    {path: '/', element: <Home/>},
]

