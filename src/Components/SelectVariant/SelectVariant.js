import { useState, useEffect } from "react";
import { getVehicles } from "../../Api";
import Error from "../Errors/Error";
import SelectedModal from "../SelectedModal/SelectedModal";
import "./SelectVariant.css";
import Cards from "../Cards/Cards";

const SelectVariant = ({ brand, model, clear }) => {
  const [carVariants, setCarVariants] = useState([]);
  const [error, setError] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedCar, setSelectedCar] = useState([]);
 
  //if model value changes, card and existing error should disappear
  useEffect(() => {
    setError(false);
    setCarVariants([]);
  }, [model]);

  function handleClick() {
    if (brand && model) {
      getVehicles(3, brand, model)
        .then((data) => {
          let vehiclesArr = [];
          data.map((val) => {
            vehiclesArr.push(val);
          });
          setCarVariants(vehiclesArr);
          if (vehiclesArr.length === 0) {
            setError(true); // show error if no model is found for the brand selected
          } else {
            setError(false);
          }
        })
        .catch(() => {
          setError(true); //show error if network request fails
        });
    }
  }

  //when car variant card is modal is visible
  function selectHandler(val) {
    setShowModal(true);
    setSelectedCar(val);
  }

  //when ok button is clicked on the modal, all inputs are cleard
  function okHandler() {
    setCarVariants([]);
    setShowModal(false);
    clear();
  }

  //when close clicked on the modal, modal becomes invisible
  function closeHandler() {
    setShowModal(false);
  }

  return (
    <>
      {brand && model ? (
        <button onClick={() => handleClick()}>Search</button>
      ) : null}
      {showModal ? (
        <SelectedModal
          selectionDetails={selectedCar}
          handleOk={() => okHandler()}
          handleClose={() => closeHandler()}
        />
      ) : null}
      {carVariants.length > 0 ? (
        <Cards handleSelect={selectHandler} carVariants={carVariants} />
      ) : null}
      {error ? (
        <Error errorText="No variants found for the above brand and model" />
      ) : null}
    </>
  );
};
export default SelectVariant;
