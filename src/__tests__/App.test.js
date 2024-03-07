import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";
import userEvent from "@testing-library/user-event";

// Portfolio Elements
test("displays a top-level heading with the text `Hi, I'm _______`", () => {
  render(<App />);

  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    exact: false,
    level: 1,
  });

  expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image of yourself", () => {
  render(<App />);

  const image = screen.getByAltText("My profile pic");

  expect(image).toHaveAttribute("src", "https://via.placeholder.com/350");
});

test("displays second-level heading with the text `About Me`", () => {
  render(<App />);

  const secondLevelHeading = screen.getByRole("heading", {
    name: /about me/i,
    level: 2,
  });

  expect(secondLevelHeading).toBeInTheDocument();
});

test("displays a paragraph for your biography", () => {
  render(<App />);

  const bio = screen.getByText(/lorem ipsum/i);

  expect(bio).toBeInTheDocument();
});

test("displays the correct links", () => {
  render(<App />);

  const githubLink = screen.getByRole("link", {
    name: /github/i,
  });
  const linkedinLink = screen.getByRole("link", {
    name: /linkedin/i,
  });

  expect(githubLink).toHaveAttribute(
    "href",
    expect.stringContaining("https://github.com")
  );

  expect(linkedinLink).toHaveAttribute(
    "href",
    expect.stringContaining("https://linkedin.com")
  );
});

// Newsletter Form - Initial State
test("the form includes text inputs for name and email address", () => {
  render(<App />);
  expect(screen.getByPlaceholderText(/email address/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/name/i)).toBeInTheDocument();
});

test("the form includes three checkboxes to select areas of interest", () => {
  render(<App />);
  expect(screen.getAllByRole("checkbox").length).toBe(3);
});

test("the checkboxes are initially unchecked", () => {
  render(<App />);
  const addCooking = screen.getByRole("checkbox", {name: /cooking/i});
  const addCoding = screen.getByRole("checkbox", {name: /coding/i});
  const addArt = screen.getByRole("checkbox", {name: /art/i});
  expect(addCooking).not.toBeChecked();
  expect(addCoding).not.toBeChecked();
  expect(addArt).not.toBeChecked();
});

// // Newsletter Form - Adding Responses
test("the page shows information the user types into the name and email address form fields", () => {
  render(<App />);
  const email = screen.getByPlaceholderText(/email address/i);
  const name = screen.getByPlaceholderText(/name/i)
  userEvent.type(email, "testing@gmail.com");
  expect(email).toHaveValue("testing@gmail.com");
  userEvent.type(name, "Allison");
  expect(name).toHaveValue("Allison");
});

test("checked status of checkboxes changes when user clicks them", () => {
  render(<App />);
  const addCooking = screen.getByRole("checkbox", {name: /cooking/i});
  const addCoding = screen.getByRole("checkbox", {name: /coding/i});
  const addArt = screen.getByRole("checkbox", {name: /art/i});
  userEvent.click(addCooking);
  expect(addCooking).toBeChecked();
  userEvent.click(addCoding);
  expect(addCoding).toBeChecked();
  userEvent.click(addArt);
  expect(addArt).toBeChecked();
});

test("a message is displayed when the user clicks the Submit button", () => {
  render(<App />);
  userEvent.click(screen.getByRole("button", {name: /subscribe/i}));
  expect(screen.getByText(/thanks for subscribing!/i)).toBeInTheDocument();
});
