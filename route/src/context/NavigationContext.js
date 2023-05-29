import { createContext, useEffect } from "react";
import { useState } from "react";

const NavigationContext = createContext();


function NavigationProvider({ children }) {
  const [path, setPath] = useState(window.location.pathname );

    useEffect(() => {
        const handler = () => { 
            setPath(window.location.pathname);
        }
        window.addEventListener('popstate',handler );
        return ()  => {// cleanup
            window.removeEventListener('popstate',handler);
        }
    },[]);

  function toggleNav(to) {
    window.history.pushState({}, '', to);
    setPath(to);
  }

  return (
    <NavigationContext.Provider value={{ path, toggleNav }}>
      {children}
    </NavigationContext.Provider>
  );
}

export { NavigationProvider };
export default NavigationContext;