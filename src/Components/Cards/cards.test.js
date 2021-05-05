import { fireEvent, render, screen } from "@testing-library/react";
import Cards from "./Cards";

describe("Testing whether Card Component is rendering without crashing", () => {
  test("<Cards /> Component is firing click event", () => {
    const carVariantsDetails = [{
      make: "FORD",
      model: "Fiesta",
      enginePowerPS: 68,
      enginePowerKW: 50,
      fuelType: "Diesel",
      bodyType: "Limousine",
      EengineCapacity: 1399,
    },
{
    make: "FORD",
    model: "Cougar",
    enginePowerPS: 78,
    enginePowerKW: 40,
    fuelType: "Diesel",
    bodyType: "Limousine",
    EengineCapacity: 1899,
  }];
  const onSelect = jest.fn();
    render(
      <Cards
      carVariants={carVariantsDetails} handleSelect={onSelect}
      />
    );

    //check if callback is being triggered on clicking a card
    const card = screen.getByText(/Fiesta/);
    fireEvent.click(card);
    expect(onSelect).toHaveBeenCalledTimes(1);
  });
});
