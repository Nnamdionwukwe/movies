import { render, screen } from "@testing-library/react";
//import App from "./App";
import StarRating from "./StarRating";

test("renders learn react link", () => {
  render(/*<App />*/ <StarRating color="yellow" />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
