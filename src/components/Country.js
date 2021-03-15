import "./Country.css";
const Country = (props) => (
  <div className="Country">
    <h3>Country: {props.name}</h3>
    <p>Capital: {props.capital}</p>
    <div className="img__container">
      <img className="img" src={props.flag} alt={props.name} />
    </div>
    <p>
      Currency: {props.currencySymbol} {props.currencyName}
    </p>
  </div>
);
export default Country;
