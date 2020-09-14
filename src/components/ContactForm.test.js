import React from 'react';
import ContactForm from './ContactForm';
import { render, cleanup, fireEvent } from '@testing-library/react';

afterEach(cleanup);

test('renders without crashing', () => {
    const { getByTestId } = render(<ContactForm />)

    expect(getByTestId('firstName')).toBeTruthy()
    expect(getByTestId('lastName')).toBeTruthy()
    expect(getByTestId('email')).toBeTruthy()
})

test('user can type in firstName field', () => {
    const { getByTestId } = render(<ContactForm />);
    const firstName = getByTestId('firstName')
    fireEvent.change(firstName, {target: {value: 'hello'}})
    expect(firstName.value).toBe('hello')
})

test('user can type in lastName field', () => {
    const { getByTestId } = render(<ContactForm />);
    const lastName = getByTestId('lastName')
    fireEvent.change(lastName, {target: {value: 'world'}})
    expect(lastName.value).toBe('world')
})

test('Email requires an email', () => {
    const { getByTestId } = render(<ContactForm />)
    const email = getByTestId('email')
    fireEvent.change(email, {target: {value: 'email@email.com'}})
    expect(email.value).toBe('email@email.com')
})

test('user can submit form', () => {
    const handleSubmit = jest.fn()
    const { getByTestId } = render(<ContactForm onSubmit={handleSubmit} />)
    const firstName = getByTestId('firstName')
    const lastName = getByTestId('lastName')
    const email = getByTestId('email')
    const submit = getByTestId('submit')
    
    fireEvent.change(firstName, {target: {value: 'First'}})
    fireEvent.change(lastName, {target: {value: 'Last'}})
    fireEvent.change(email, {target: {value: 'email@email.com'}})
    fireEvent.click(submit)

    expect(handleSubmit).toHaveBeenCalled()
})