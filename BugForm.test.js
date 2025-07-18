import { render, screen } from '@testing-library/react';
import BugForm from '../components/BugForm';

test('renders bug form', () => {
  render(<BugForm />);
  expect(screen.getByText(/Submit Bug/i)).toBeInTheDocument();
});