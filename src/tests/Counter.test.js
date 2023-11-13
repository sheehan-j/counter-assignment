// import necessary react testing library helpers here
// import the Counter component here
import {render, screen, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom'
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);
  expect(screen.getByText('Counter', {selector: 'h2'})).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);
  const initialValue = screen.getByTestId('count');
  expect(initialValue).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);
  const counter = screen.getByTestId('count');
  const initialCount = parseInt(counter.textContent, 10);
  const incrementBtn = screen.getByText('+');

  // Verify increment button displays
  expect(incrementBtn).toBeInTheDocument();

  // Click the button
  fireEvent.click(incrementBtn);

  // Verify the count is incremented
  const expectedCount = (initialCount+1).toString()
  expect(counter).toHaveTextContent(expectedCount);
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);
  const counter = screen.getByTestId('count');
  const initialCount = parseInt(counter.textContent, 10);
  const decrementBtn = screen.getByText('-');

  // Verify increment button displays
  expect(decrementBtn).toBeInTheDocument();

  // Click the button
  fireEvent.click(decrementBtn);

  // Verify the count is incremented
  const expectedCount = (initialCount-1).toString()
  expect(counter).toHaveTextContent(expectedCount);
});
