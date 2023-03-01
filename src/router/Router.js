import {useRoutes} from "react-router-dom"

import "./Router.css";
import MainView from "../views/MainView";
import AllGame from "../views/AllGame";
import Game from "../views/Game";

const Router = () => {
    const routes = useRoutes(
        [
            {
                path: '/',
                element: <MainView/>
            },
            {
                path: '/:platform/:category',
                element: <Game/>
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