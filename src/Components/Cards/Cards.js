import "./Cards.css";

//This map stores text that is displayed for each property of the cars
export const carProperties = new Map([
  ["make", "Make"],
  ["model", "Model"],
  ["enginePowerPS", "Engine Power PS"],
  ["enginePowerKW", "Engine Power KW"],
  ["fuelType", "Fuel Type"],
  ["bodyType", "Body Type"],
  ["engineCapacity", "Engine Capacity"],
]);

const Cards = ({ carVariants, handleSelect }) => {
  return (
    <div className="cardContainer">
      {carVariants.map((val, id) => (
        <div className="cards" key={id} onClick={() => handleSelect(val)}>
          {Object.keys(val).map((carsProps, id) => (
            <div className="specifications" key={id}>
              <label>{carProperties.get(carsProps)}: </label>
              {val[carsProps]}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
export default Cards;
