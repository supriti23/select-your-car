import { fireEvent, render, screen } from "@testing-library/react";
import SelectedModal from "./SelectedModal";

describe("Testing whether Modal Component is rendering without crashing", () => {
  test("<SelectedModal /> Component is firing click event", () => {
    const onOkay = jest.fn();
    const selectedCarSpecs = {
      make: "FORD",
      model: "Fiesta",
      enginePowerPS: 68,
      enginePowerKW: 50,
      fuelType: "Diesel",
      bodyType: "Limousine",
      EengineCapacity: 1399,
    };
    render(
      <SelectedModal
        selectionDetails={selectedCarSpecs}
        handleOk={onOkay}
      />
    );
    const okButton = screen.getByRole("button");
    fireEvent.click(okButton);
    expect(onOkay).toHaveBeenCalledTimes(1);

  });
});
