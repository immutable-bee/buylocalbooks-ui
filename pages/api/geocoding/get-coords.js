const handler = async (req, res) => {
  if (req.method === "POST") {
    const { postalCode } = req.body;

    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${postalCode}&key=${process.env.GMAPS_KEY}`
      );

      const data = await response.json();
      const location = data.results[0].geometry.location;

      res.status(200).json({
        latitude: location.lat,
        longitude: location.lng,
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
