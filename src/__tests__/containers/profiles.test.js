import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SelectedProfileContainer } from '../../containers/profiles';

jest.mock('react-router-dom');

describe('<Profiles />', () => {
  it('renders the <Profiles />', () => {
    const user = { displayName: 'Kim', photoURL: 'profile.png' };
    const setProfile = jest.fn();
    const { getByTestId } = render(
    <SelectedProfileContainer user={user} setProfile={setProfile} />
    );

    fireEvent.click(getByTestId('user-profile'));
    expect(setProfile).toHaveBeenCalled();
  });
});