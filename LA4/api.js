export const fetchCountries = async (query) => {
  const res = await fetch(`https://restcountries.com/v3.1/name/${query}`);
  const data = await res.json();

  if (!res.ok) {
    throw new Error("Failed to fetch countries");
  }

  return data.map(country => ({
    name: country.name.common,
    capital: country.capital?.[0] || "N/A",
    population: country.population,
    region: country.region,
    flag: country.flags?.png
  }));
};