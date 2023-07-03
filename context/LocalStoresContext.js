import { createContext, useState, useEffect, useContext } from "react";

import { getLocalStores } from "../services/blbn";
import { LocationContext } from "./LocationContext";
import { set } from "date-fns";

export const LocalStoresContext = createContext();

export const LocalStoresProvider = ({ children }) => {
  const [storeIds, setStoreIds] = useState([]);
  const [localStores, setLocalStores] = useState([]);
  const [newListings, setNewListings] = useState([]);
  const { location } = useContext(LocationContext);

  useEffect(() => {
    if (location?.postalCode) {
      const fetchLocalStores = async () => {
        const { localStores, localStoreIds, newListings } =
          await getLocalStores(location.latitude, location.longitude);
        setStoreIds(localStoreIds);
        setLocalStores(localStores);
        setNewListings(newListings);
      };
      fetchLocalStores();
    }
  }, [location?.postalCode]);
  return (
    <LocalStoresContext.Provider value={{ storeIds, localStores, newListings }}>
      {children}
    </LocalStoresContext.Provider>
  );
};
