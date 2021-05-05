import { useEffect, useState } from "react";
import { getMakes } from "../../Api";
import Dropdown from "../Dropdown/Dropdown";
import Error from "../Errors/Error";

const Make = ({ handleChange, brand }) => {
  const [makesList, setMakesList] = useState([]);
  const [error, setError] = useState(false)

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

  return (
    <>
      <Dropdown
        list="makes"
        inputName="make"
        placeholder="Search your car brand..."
        value={brand}
        handleChange={handleChange}
        elementList={makesList}
      />
      {error ? (
        <Error errorText="Site is down. Come back after sometime..." />
      ) : null}
    </>
  );
};
export default Make;
