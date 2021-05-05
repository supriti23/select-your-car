import { fireEvent, render, screen } from "@testing-library/react";
import Make from "./Make";

describe("Testing whether Make Component is rendering without crashing and change event is working", () => {

  test("<Make /> Component is firing change event", () => {
    const onChange = jest.fn();
    render(<Make handleChange={() => onChange()}/>);
    const input = screen.getByPlaceholderText("Search your car brand...");
    
    //check if onchange event is changing value
    fireEvent.change(input, { target: { value: "Ford" } });
    expect(onChange).toHaveBeenCalled();
  });
});