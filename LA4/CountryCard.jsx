const CountryCard = ({ country }) => {
  return (
    <div className="card">
      <img src={country.flag} alt={country.name} />
      <h3>{country.name}</h3>
      <p><b>Capital:</b> {country.capital}</p>
      <p><b>Population:</b> {country.population}</p>
      <p><b>Region:</b> {country.region}</p>
    </div>
  );
};

export default CountryCard;