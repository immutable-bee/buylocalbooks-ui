import { createContext, useState, useEffect } from "react";

export const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState();

  // Function to get the user's location
  const getLocation = () => {
    // Try to get the location from Session Storage first
    const storedLocation = sessionStorage.getItem("location");

    if (storedLocation) {
      setLocation(JSON.parse(storedLocation));
    } else if (navigator.geolocation) {
      // If no stored location, ask the user for their location
      navigator.geolocation.getCurrentPosition((position) => {
        const newLocation = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
        setLocation(newLocation);
        // Store the new location in Session Storage
        sessionStorage.setItem("location", JSON.stringify(newLocation));
      });
    }
  };

  // Call getLocation on initial render
  useEffect(() => {
    getLocation();
  }, []);

  return (
    <LocationContext.Provider value={{ location, getLocation }}>
      {children}
    </LocationContext.Provider>
  );
};
