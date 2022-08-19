import {Settings, Home, Registration, Profile, Stream, Streams} from "../pages";

export const privateRoutes = [
    {path: '/settings/*', element: <Settings/>},
    {path: '/profile/:username', element: <Profile/>},
]

export const publicRoutes = [
    {path: '/', element: <Home/>},
    {path: '/signup', element: <Registration/>},
    {path: '/streams', element: <Streams/>},
    {path: '/streams/:stream', element: <Stream/>},
]

