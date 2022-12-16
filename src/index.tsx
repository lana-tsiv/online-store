import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import './styles/main-styles.css';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import NotFoundPage from "./pages/Not-found-page";

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <><NotFoundPage/></>,
        element: <App/>,
    },
]);

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
