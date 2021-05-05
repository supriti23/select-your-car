import { fireEvent, render, screen } from "@testing-library/react";
import Dropdown from "./Dropdown";

describe("Testing whether DropDown Component is rendering without crashing", () => {
  test("Testing <Dropdown /> Component events are being triggered or not", () => {
    const onChange = jest.fn();
    const onFocus = jest.fn();
    const elementList = ["BMW", "AUDI", "FORD"];
    render(
      <Dropdown
        handleChange={() => onChange()}
        value="BMW"
        placeholder="Search your car brand..."
        inputName="brand"
        list="make"
        elementList={elementList}
        styles={{ visible: "hidden" }}
        handleFocus={() => onFocus()}
      />
    );
    const brand = screen.getByDisplayValue("BMW");
    // check on focus event is being fired and a call back is called
    fireEvent.focus(brand);
    expect(onFocus).toHaveBeenCalledTimes(1);

    // check on change event is being fired and a call back is called
    fireEvent.change(brand, { target: { value: "AUDI" } });
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
