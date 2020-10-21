import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import { SignIn } from '../../pages';
import { firebaseContext } from '../../context/firebase';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({}),
}));

const firebase = {
  auth: jest.fn(() => ({
    signInWithEmailAndPassword: jest.fn(() => Promise.resolve('I am signed in!')),
  })),
};

describe('<SignIn />', () => {
  it('renders the sign in page with a form submission', async () => {
    const { getByTestId, getByPlaceholderText, queryByTestId } = render(
      <Router>
        <firebaseContext.Provider value={{ firebase }}>
          <SignIn />
        </firebaseContext.Provider>
      </Router>
    );

    await act(async () => {
      await fireEvent.change(getByPlaceholderText('Email address'), { target: { value: 'brumm@gmail.com' } });
      await fireEvent.change(getByPlaceholderText('Password'), { target: { value: 'password' } });
      fireEvent.click(getByTestId('sign-in'));

      expect(getByPlaceholderText('Email address').value).toBe('brumm@gmail.com');
      expect(getByPlaceholderText('Password').value).toBe('password');
      expect(queryByTestId('error')).toBeFalsy();
    });
  });
});