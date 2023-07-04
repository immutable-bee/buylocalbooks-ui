import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";

// Create Context object
export const NavigationContext = createContext();

// Create a provider for components to consume and subscribe to changes
export const NavigationProvider = ({ children }) => {
  const [previousPage, setPreviousPage] = useState(null);
  const { asPath } = useRouter();

  useEffect(() => {
    // Check if sessionStorage is available
    if (typeof window !== "undefined") {
      const currentPage = sessionStorage.getItem("currentPage");

      if (currentPage && currentPage !== asPath) {
        sessionStorage.setItem("previousPage", currentPage);
        sessionStorage.setItem("currentPage", asPath);
      } else if (!currentPage) {
        sessionStorage.setItem("currentPage", asPath);
      }

      setPreviousPage(sessionStorage.getItem("previousPage"));
    }
  }, [asPath]);

  return (
    <NavigationContext.Provider value={{ previousPage }}>
      {children}
    </NavigationContext.Provider>
  );
};

// Create a custom hook for easy access to the context
export const useNavigationContext = () => {
  return useContext(NavigationContext);
};
