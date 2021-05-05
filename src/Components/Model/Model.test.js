import { getModels } from "../../Api";
import { fireEvent, render, screen } from "@testing-library/react";
import Model from "./Model";

describe("Testing whether Model Component is rendering without crashing", () => {
  test("<Model /> Component is firing event change and focus", () => {
    const onChange = jest.fn();
    render(<Model handleChange={() => onChange()} brand="Ford" />);
    const input = screen.getByPlaceholderText("Search your car model...");
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: "Fiesta" } });
    expect(onChange).toHaveBeenCalled();
  });
});
