import React from "react";
import * as rtl from "@testing-library/react";
import App from "./App";
import ContactForm from "./components/ContactForm";
import { fireEvent, userEvent } from "@testing-library/user-event";

test("renders App without crashing", () => {
  rtl.render(<App />);
});

test('renders ContactForm without crashing', () => {
  rtl.render(<ContactForm />)
})


const simulatedDOM = rtl.render(<ContactForm />);
const firstName = simulatedDOM.queryByRole('input', {name: 'firstName'});
const lastName = simulatedDOM.queryByRole('input', {name: 'lastName'});

test('user can enter text in firstName input', () => {
  userEvent.type(firstName, 'hello');
  expect(firstName.value).toBe('hello');
  expect(firstName).toBeRequired();
  // expect(firstName).
});

test('if user has entered valid email address', () => {
  const email = simulatedDOM.queryByRole('input', {name: 'email'});
  console.log(email);
})

// const inputTest = () => {
//   const inputs = render(<ContactForm />)
//   const fields = inputs.getByName('firstName');
//   return {
//     fields,
//     ...inputs,
//   }
// }

// test('user can type in input fields', () => {
//   const { fields } = inputTest();
//   fireEvent.change(fields, {target: {value: 'hello'}})
//   expect(fields.value).toBe('hello')
// })
