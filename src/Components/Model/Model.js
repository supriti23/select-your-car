import { useEffect, useState } from "react";
import { getModels } from "../../Api";
import Error from "../Errors/Error";
import Dropdown from "../Dropdown/Dropdown";

const Model = ({ handleChange, brand, model }) => {
  const [modelList, setModelList] = useState([]);
  const [isVisible, setVisibility] = useState(false);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    setShowError(false);
    if (brand) {
      setVisibility(true);
    } else {
      setVisibility(false);
    }
  }, [brand]);

  function focusHandler(e) {
    if (brand) {
      getModels(5, brand)
        .then((data) => {
          let modelsArr = [];
          data.map((val) => {
            modelsArr.push(val);
          });
          setModelList(modelsArr);
          if (modelsArr.length === 0) {
            setShowError(true);
          } else {
            setVisibility(true);
          }
        })
        .catch(() => {
          setShowError(true);
        });
    } else {
      setVisibility(false);
      setShowError(false);
    }
  }

  return (
    <>
      <Dropdown
        list="models"
        inputName="model"
        placeholder="Search your car model..."
        value={model}
        brand={brand}
        handleChange={handleChange}
        elementList={modelList}
        styles={{ visibility: isVisible ? "visible" : "hidden" }}
        handleFocus={() => focusHandler()}
      />
      {showError ? <Error errorText="No models found for this brand" /> : null}
    </>
  );
};
export default Model;
