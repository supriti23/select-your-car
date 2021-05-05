import { render, screen } from "@testing-library/react";
import Error from "./Error";

describe("Testing whether Error Component is rendering without crashing", () => {
  test("<Error  /> Component is firing change event", () => {
    
    const errorMsg = "No models found for this brand";
    render(<Error errorText={errorMsg} />);
    const text = screen.getByText(errorMsg);
    expect(text).toBeInTheDocument;
  });
});