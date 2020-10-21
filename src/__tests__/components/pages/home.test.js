import React from 'react';
import { render } from '@testing-library/react';
import { Home } from '../../../pages';

jest.mock('react-router-dom');

test('renders the homepage', () => {
  const { getByText, getAllByText, getAllByPlaceholderText } = render(<Home />);
  expect(getByText('Unlimited films, TV programmes and more.')).toBeTruthy();
  expect(getByText('Watch anywhere, cancel at any time.')).toBeTruthy();
  expect(getAllByPlaceholderText('Email address')).toBeTruthy();
  expect(getAllByText('Try it now')).toBeTruthy();
  expect(getAllByText('Ready to watch? Enter your email to create or start your membership.')).toBeTruthy();
});