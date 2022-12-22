import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import './styles/main-styles.css';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";

import {store} from "./redux/store";
import {Provider} from "react-redux";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: '*',
                element: <NotFoundPage/>
            }
        ]

    },
]);

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    </React.StrictMode>
);
