import {useContext} from "react";
import NavigationContext from "../context/NavigationContext";

function Router({ route,children }) {
    const {path} = useContext(NavigationContext);
    if(route === path) return children;
    else return null;
}
export default Router;