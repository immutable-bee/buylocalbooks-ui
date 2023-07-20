const handler = async (req, res) => {
  if (req.method === "POST") {
    const { postalCode } = req.body;

    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${postalCode}&key=${process.env.GMAPS_KEY}`
      );

      const data = await response.json();
      const location = data.results[0].geometry.location;

      const fetchStateByCoords = async () => {
        const reverseEndpoint = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key=${apiKey}`;

        const response = await fetch(reverseEndpoint);

        const data = await response.json();

        const results = data.results;
        const firstResult = results[0];
        if (!firstResult) {
          res.status(404).json({ message: "No location found" });

          const stateLongNameComponent = firstResult.address_components.find(
            (component) =>
              component.types.includes("administrative_area_level_1")
          );
          if (!stateLongNameComponent) {
            res.status(404).json({ message: "No state found" });
          }
          return stateLongNameComponent.long_name;
        }
      };

      const state = await fetchStateByCoords();

      res.status(200).json({
        latitude: location.lat,
        longitude: location.lng,
        state: state,
      });
    } catch (error) {
      res.status(500).json({ error: "Unable to get coordinates" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;
