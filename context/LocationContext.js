import { createContext, useState, useEffect } from "react";

export const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState();

  // Function to get the user's location
  const getLocation = async () => {
    // Try to get the location from Session Storage first
    const storedLocation = sessionStorage.getItem("location");

    if (storedLocation?.postalCode) {
      setLocation(JSON.parse(storedLocation));
    } else if (navigator.geolocation) {
      // If no stored location, ask the user for their location
      navigator.geolocation.getCurrentPosition(async (position) => {
        const newLocation = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };

        // Call the route to get the postal code
        const response = await fetch("/api/geocoding/get-zip", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newLocation),
        });
        const data = await response.json();

        // If the request was successful, add the postal code to the location
        if (response.ok) {
          newLocation.postalCode = data.postalCode;
        }

        // Set and store the new location
        setLocation(newLocation);
        sessionStorage.setItem("location", JSON.stringify(newLocation));
      });
    }
  };

  const setLocationByZip = async (zip) => {
    const response = await fetch("/api/geocoding/get-coords", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ postalCode: zip }),
    });

    if (response.ok) {
      const newLocation = await response.json();
      newLocation.postalCode = zip;
      setLocation(newLocation);
      // Store the new location in Session Storage
      sessionStorage.setItem("location", JSON.stringify(newLocation));
    } else {
      // Handle error...
    }
  };

  // Call getLocation on initial render
  useEffect(() => {
    getLocation();
  }, []);

  return (
    <LocationContext.Provider
      value={{ location, getLocation, setLocationByZip }}
    >
      {children}
    </LocationContext.Provider>
  );
};
