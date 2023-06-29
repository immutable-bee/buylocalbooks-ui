import { createContext, useState, useEffect, useContext } from "react";

import { getLocalStores } from "../services/blbn";
import { LocationContext } from "./LocationContext";

export const LocalStoresContext = createContext();

export const LocalStoresProvider = ({ children }) => {
  const [storeIds, setStoreIds] = useState([]);
  const { location } = useContext(LocationContext);

  useEffect(() => {
    if (location?.postalCode) {
      const fetchLocalStores = async () => {
        const localStores = await getLocalStores(
          location.latitude,
          location.longitude
        );
        setStoreIds(localStores);
      };
      fetchLocalStores();
    }
  }, [location?.postalCode]);
  return (
    <LocalStoresContext.Provider value={{ storeIds }}>
      {children}
    </LocalStoresContext.Provider>
  );
};
