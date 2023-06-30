export const getLocalStores = async (lat, lon) => {
  const response = await fetch(
    `https://www.buylocalbooksnetwork.com/api/blb/get-local-stores?userLat=${lat}&userLon=${lon}`
  );
  const data = await response.json();
  return data;
};

export const getLocalListings = async (storeIds) => {
  const response = await fetch(
    "https://www.buylocalbooksnetwork.com/api/blb/get-local-listings",
    {
      method: "POST",
      headers: {},
      body: JSON.stringify({ storeIds }),
    }
  );
  const data = await response.json();
  return data;
};

export const getSearchResults = async ({
  storeIds = [],
  searchTerm,
  filter = "none",
  local = true,
}) => {
  const response = await fetch(
    "https://www.buylocalbooksnetwork.com/api/blb/search",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ storeIds, searchTerm, filter, local }),
    }
  );
  const data = await response.json();
  return data;
};
