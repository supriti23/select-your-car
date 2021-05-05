import { useState } from "react";
import Make from "../Make/Make";
import Model from "../Model/Model";
import SelectVariant from "../SelectVariant/SelectVariant";
import "./MainComp.css";

const carDetails = {
  make: "",
  model: "",
};

const MainComp = () => {
  const [carSpecs, setCarSpecs] = useState(carDetails);

  function handleChange(event) {
    event.preventDefault();
    if (event.target.name === "model") {
      setCarSpecs({ ...carSpecs, [event.target.name]: event.target.value });
    } else if (event.target.name === "make") {
      setCarSpecs({
        ...carSpecs,
        [event.target.name]: event.target.value,
        model: "", //if make is changed, model will be cleared
      });
    }
  }
  
  function handleClear() {
    setCarSpecs(carDetails);
  }

  return (
      <div className="container">
        <div className="header">Select Your Car</div>
        <div className="model">
          <Make
            handleChange={(event) => handleChange(event)}
            brand={carSpecs.make}
          />
        </div>
        <div className="model">
          <Model
            handleChange={(event) => handleChange(event)}
            brand={carSpecs.make}
            model={carSpecs.model}
          />
        </div>
        <div className="variants">
          <SelectVariant
            brand={carSpecs.make}
            model={carSpecs.model}
            clear={() => handleClear()}
          />
        </div>
      </div>
  );
};
export default MainComp;
