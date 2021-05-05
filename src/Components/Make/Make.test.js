import { fireEvent, render, screen } from "@testing-library/react";
import Make from "./Make";

describe("Testing whether Make Component is rendering without crashing", () => {

  test("<Make /> Component is firing change event", () => {
    const onChange = jest.fn();
    render(<Make handleChange={() => onChange()}/>);
    const input = screen.getByPlaceholderText("Search your car brand...");
    fireEvent.change(input, { target: { value: "Ford" } });
    expect(onChange).toHaveBeenCalled();
  });
});