import React from "react";
import { render, fireEvent, getByName } from "@testing-library/react";
import App from "./App";
import ContactForm from "./components/ContactForm";

test("renders App without crashing", () => {
  render(<App />);
});

const inputTest = () => {
  const inputs = render(<ContactForm />)
  const fields = inputs.getByName('firstName');
  return {
    fields,
    ...inputs,
  }
}

test('user can type in input fields', () => {
  const { fields } = inputTest();
  fireEvent.change(fields, {target: {value: 'hello'}})
  expect(fields.value).toBe('hello')
})
