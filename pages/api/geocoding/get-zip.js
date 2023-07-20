const handler = async (req, res) => {
  const { latitude, longitude } = req.body;

  const apiKey = process.env.GMAPS_KEY;
  const endpoint = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;

  const response = await fetch(endpoint);
  const data = await response.json();

  const results = data.results;
  const firstResult = results[0];
  if (!firstResult) {
    res.status(404).json({ message: "No location found" });
    return;
  }

  // Get the postal code from the address components
  const postalCodeComponent = firstResult.address_components.find((component) =>
    component.types.includes("postal_code")
  );
  if (!postalCodeComponent) {
    res.status(404).json({ message: "No postal code found" });
    return;
  }

  const stateLongNameComponent = firstResult.address_components.find(
    (component) => component.types.includes("administrative_area_level_1")
  );
  if (!stateLongNameComponent) {
    res.status(404).json({ message: "No state found" });
  }

  const postalCode = postalCodeComponent.long_name;
  const stateLongName = stateLongNameComponent.long_name;

  // Return the postal code
  res.status(200).json({ postalCode, stateLongName });
};

export default handler;
