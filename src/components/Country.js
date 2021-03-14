const Country = (props) => (
  <div>
    <h3>{props.name}</h3>
    <p>{props.capital}</p>
    <img src={props.flag} />
  </div>
);
export default Country;
