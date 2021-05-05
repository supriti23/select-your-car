import { useEffect, useState } from "react";
import { getMakes } from "../../Api";
import Dropdown from "../Dropdown/Dropdown";
import Error from "../Errors/Error";

const Make = ({ handleChange, brand }) => {
  const [makesList, setMakesList] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    getMakes(5) 
      .then((data) => {
        let makesArr = [];
        data.map((val) => makesArr.push(val));
        setMakesList(makesArr);
      })
      .catch(() => {
        setError(true);
      });
  }, []);
 console.log(error)
  return (
    <>
      <Dropdown
        list="makes"
        inputName="make"
        placeholder="Search your car brand..."
        value={brand}
        handleChange={handleChange}
        elementList={makesList}
        styles={{visibility: error ? "hidden" : "visible" }} //hide in case Api to get all makes fails
      />
      {error ? (
        <Error errorText="Site is down. Please come back after sometime." />
      ) : null}
    </>
  );
};
export default Make;
