import { fireEvent, render, screen } from "@testing-library/react";
import SelectVariant from "./SelectVariant";

describe("Testing whether Select Variant Component is rendering without crashing", () => {
  test("<SelectVariant/> Component is firing click event ", () => {
    render(<SelectVariant brand="Ford" model="Fiesta" clear={jest.fn()} />);

    const searchButton = screen.getByRole("button");
    fireEvent.click(searchButton);
  });
});
