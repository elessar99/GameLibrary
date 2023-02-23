import {useRoutes} from "react-router-dom"

import "./Router.css";
import MainView from "../views/MainView";

const Router = () => {
    const routes = useRoutes(
        [
            {
                path: '/',
                element: <MainView/>
            },
            {
                path: '*',
                element: <div>
                    404 Not Found
                </div>
            }
        ]
    )
    return routes
}
export default Router