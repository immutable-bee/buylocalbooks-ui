export const getLocalStores = async (lat, lon) => {
  const response = await fetch(
    `https://www.buylocalbooksnetwork.com/api/blb/get-local-stores?userLat=${lat}&userLon=${lon}`
  );
  const data = await response.json();
  return {
    localStores: data.localStores,
    localStoreIds: data.localStoreIds,
    newListings: data.newLocalListings,
  };
};

export const getLocalListings = async ({
  storeIds,
  firstQuery = true,
  cursor = null,
}) => {
  const response = await fetch(
    "https://www.buylocalbooksnetwork.com/api/blb/get-local-listings",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ storeIds, firstQuery, cursor }),
    }
  );
  const data = await response.json();
  return data;
};

export const getListingDetails = async (listingId) => {
  const response = await fetch(
    `https://www.buylocalbooksnetwork.com/api/blb/get-listing-details?id=${listingId}`
  );
  const data = await response.json();
  return data;
};

export const getStoreDetails = async (storeId) => {
  const response = await fetch(
    `https://www.buylocalbooksnetwork.com/api/blb/get-store-details?id=${storeId}`
  );
  const data = await response.json();
  return data;
};

export const getSearchResults = async ({
  storeIds = [],
  searchTerm,
  filter = "none",
  local = true,
  firstQuery = true,
  cursor = null,
}) => {
  const response = await fetch(
    "https://www.buylocalbooksnetwork.com/api/blb/search",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        storeIds,
        searchTerm,
        filter,
        local,
        firstQuery,
        cursor,
      }),
    }
  );
  const data = await response.json();
  return data;
};

export const sendBuyRequest = async ({ listingId, user }) => {
  try {
    const response = await fetch(
      "https://www.buylocalbooksnetwork.com/api/blb/sendBuyRequest",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ listingId, user }),
      }
    );
    const data = await response.json();
    return { data, statusCode: response.status };
  } catch (error) {
    console.error("Fetch failed:", error);
    throw error;
  }
};
