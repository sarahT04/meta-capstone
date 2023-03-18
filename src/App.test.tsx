import React from 'react';
import { render, screen } from '@testing-library/react';
import BookingPage, { initializeTimes, updateTimes } from './Booking';

// pay attention to write it at the top level of your file
const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => mockedUsedNavigate,
}));


interface Actions {
  type: string;
  expected: string[];
  data?: Date;
};

const texts: string[] = [
  "Contact Information",
  "Reservation Date and Time",
  "Number of People",
  "Additional Information",
  "Please notice that",
];

const expectedAction: string[] = [
  '17:00', '17:30',
  '18:00', '18:30',
  '19:30', '20:30',
  '21:00', '21:30',
  '22:00', '22:30',
  '23:00', '23:30'
]

const actions: Actions[] = [
  { type: "INITIALIZE", expected: initializeTimes() },
  { type: "GET DATE", data: new Date(1677566972450), expected: expectedAction },
]

test.skip('Checks if texts in booking form.', () => {
  render(<BookingPage />);
  texts.forEach((text) => {
    const element = screen.getByText(text);
    expect(element).toBeInTheDocument();
  })
});

test('Checks for initialize times.', () => {
  render(<BookingPage />)
  initializeTimes().forEach((time) => {
    const element = screen.getByText(time);
    expect(element).toBeInTheDocument();
  })
})

test('Checks for time updates', () => {
  actions.forEach((action) => {
    expect(updateTimes("", action)).toEqual(action.expected)
  })
})

test('Check if redirect after submitting form data', () => {
  
})