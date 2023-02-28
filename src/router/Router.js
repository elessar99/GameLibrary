import {useRoutes} from "react-router-dom"

import "./Router.css";
import MainView from "../views/MainView";
import AllGame from "../views/AllGame";

const Router = () => {
    const routes = useRoutes(
        [
            {
                path: '/',
                element: <MainView/>
            },
            {
                path: '/allgame',
                element: <AllGame/>
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