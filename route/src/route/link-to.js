import { useContext } from "react";
import NavigationContext from "../context/NavigationContext";

function LinkTo ({to}) {
    const {toggleNav} = useContext(NavigationContext);

    const f = () => {
        toggleNav(to);
    }

    return (
        <div style={{cursor:'pointer'}} onClick={f}>{to}</div>
    );
};

export default LinkTo;