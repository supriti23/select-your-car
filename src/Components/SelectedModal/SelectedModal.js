import "./SelectedModal.css";
import { carProperties } from "../Cards/Cards";

const SelectedModal = ({ selectionDetails, handleOk, handleClose }) => {
  
  return (
    <div className="modal">
      <div className="modal-content">
        <div>
          <h3>
            You have selected{" "}
            <span className="close" onClick={handleClose}>
              &times;
            </span>
          </h3>
        </div>
        {Object.keys(selectionDetails).map((value,idx) => (
          <div className="carSpecs" key={idx} >
            <label>{carProperties.get(value)}</label> :{" "}
            {selectionDetails[value]}
          </div>
        ))}
        <span className="ok">
          <button onClick={handleOk}>OK</button>
        </span>
      </div>
    </div>
  );
};
export default SelectedModal;
