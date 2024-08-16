// import { render, screen, fireEvent, waitFor } from '@testing-library/react';
// import { describe, expect } from "vitest";
// // import '@testing-library/jest-dom/extend-expect';
// import RegisterForm from './RegisterForm';

// describe('RegisterForm', () => {
//     describe('renders form with all fields and submit button', () => {
//     render(<RegisterForm />);

//     // expect(screen.getByLabelText(/Fill the Form/i)).toBeInTheDocument();
//     expect(screen.getByPlaceholderText(/firstname/i)).toBeInTheDocument();
//     expect(screen.getByPlaceholderText(/lastname/i)).toBeInTheDocument();
//     expect(screen.getByPlaceholderText(/example@example.com/i)).toBeInTheDocument();
//     expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
//     // expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
//   });

//   describe('shows validation errors on form submit with invalid data', async () => {
//     render(<RegisterForm />);

//     fireEvent.click(screen.getByRole('button', { name: /submit/i }));

//     // Wait for validation errors to appear
//     await waitFor(() => {
//       expect(screen.getByText(/max is length is 8 character/i)).toBeInTheDocument();
//       expect(screen.getByText(/Email is required/i)).toBeInTheDocument();
//       expect(screen.getByText(/Password required/i)).toBeInTheDocument();
//     });
//   });

//   describe('shows specific error messages for invalid inputs', async () => {
//     render(<RegisterForm />);

//     // Fill in invalid data
//     fireEvent.input(screen.getByPlaceholderText(/firstname/i), {
//       target: { value: 'ThisNameIsTooLong' }
//     });
//     fireEvent.input(screen.getByPlaceholderText(/email/i), {
//       target: { value: 'invalid-email' }
//     });
//     fireEvent.input(screen.getByPlaceholderText(/password/i), {
//       target: { value: 'short' }
//     });

//     // Submit form
//     fireEvent.click(screen.getByRole('button', { name: /submit/i }));

//     // Wait for validation errors to appear
//     await waitFor(() => {
//       expect(screen.getByText(/max is length is 8 character/i)).toBeInTheDocument();
//       expect(screen.getByText(/Invalid email address/i)).toBeInTheDocument();
//       expect(screen.getByText(/Password must be at least 8 characters/i)).toBeInTheDocument();
//     });
//   });

//   describe('does not show validation errors for valid inputs', async () => {
//     render(<RegisterForm />);

//     // Fill in valid data
//     fireEvent.input(screen.getByPlaceholderText(/firstname/i), {
//       target: { value: 'ValidName' }
//     });
//     fireEvent.input(screen.getByPlaceholderText(/lastname/i), {
//       target: { value: 'ValidLastName' }
//     });
//     fireEvent.input(screen.getByPlaceholderText(/email/i), {
//       target: { value: 'valid@example.com' }
//     });
//     fireEvent.input(screen.getByPlaceholderText(/password/i), {
//       target: { value: 'Valid1@Password' }
//     });

//     // Submit form
//     fireEvent.click(screen.getByRole('button', { name: /submit/i }));

//     // Wait for no errors to appear
//     await waitFor(() => {
//       expect(screen.queryByText(/max is length is 8 character/i)).not.toBeInTheDocument();
//       expect(screen.queryByText(/Email is required/i)).not.toBeInTheDocument();
//       expect(screen.queryByText(/Password required/i)).not.toBeInTheDocument();
//     });
//   });
// });

import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import RegisterForm from "./RegisterForm";

describe("RegisterForm", () => {
  it("renders form with all fields and submit button", () => {
    render(<RegisterForm />);

    expect(screen.getByText(/Fill the Form/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/firstname/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/lastname/i)).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/example@example.com/i)
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
  });

  it('shows validation errors on form submit with without   data', async () => {
    render(<RegisterForm />);

    // Submit the form with invalid data
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    // Wait for validation errors to appear
    await waitFor(() => {
      // Use queryAllByText to handle multiple matching elements
      expect(screen.queryAllByText(/max is length is 8 character/i).length).toBeGreaterThan(0);
      expect(screen.queryAllByText(/Email is required/i).length).toBeGreaterThan(0);
      expect(screen.queryAllByText(/Password required/i).length).toBeGreaterThan(0);
    });
  });

});


