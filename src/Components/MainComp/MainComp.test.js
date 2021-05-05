import MainComp from "./MainComp";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Testing the main Component is rendering without crashing", () => {
  test("<MainComp /> full flow testing", () => {
    render(<MainComp />);
    const brand = screen.getByPlaceholderText("Search your car brand...");

    //check when change event is fired on brand input, textbox for the car model appears or not
    fireEvent.change(brand, { target: { value: "FORD" } });
    const model = screen.getByPlaceholderText("Search your car model...");

    //check when change event is fired on model input, search button appears or not
    fireEvent.change(model, { target: { value: "Fiesta" } });
    const search = screen.getByRole("button");

    //check click event is firing for search button
    fireEvent.click(search);
  });
});
