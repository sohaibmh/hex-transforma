import { render, screen } from "@testing-library/react";
import App from "./App";

test("contains my name", () => {
  render(<App />);
  const name = screen.getByText(/Sohaib Mubashir/i);
  expect(name).toBeInTheDocument();
});
