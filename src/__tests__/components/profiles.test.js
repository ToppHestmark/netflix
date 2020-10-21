import React from 'react';
import { render } from '@testing-library/react';
import { Profiles } from '../../components';

describe('<Profiles />', () => {
  it('renders the <Profiles /> with populated data', () => {
    const { container, getByText, getByTestId } = render(
      <Profiles>
      <Profiles.Title>Who's watching?</Profiles.Title>
      <Profiles.List>
        <Profiles.User onClick={() => {}}>
          <Profiles.Picture src="/images/users/5.png" data-testid="profile-picture-misc" />
          <Profiles.Name> Kim Jong-Un </Profiles.Name>
        </Profiles.User>
      </Profiles.List>
    </Profiles>
    );

    expect(getByText("Who's watching?"));
    expect(getByTestId('profile-picture-misc')).toBeTruthy();
    expect(getByText('Kim Jong-Un'));
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the <Profiles /> with populated data but misc profile image', () => {
    const { container, getByText, getByTestId } = render(
      <Profiles>
      <Profiles.Title>Who's watching?</Profiles.Title>
      <Profiles.List>
        <Profiles.User onClick={() => {}}>
          <Profiles.Picture src="" data-testid="profile-picture-misc" />
          <Profiles.Name>Karl</Profiles.Name>
        </Profiles.User>
      </Profiles.List>
    </Profiles>
    );

    expect(getByText("Who's watching?"));
    expect(getByTestId('profile-picture-misc')).toBeTruthy();
    expect(getByText('Karl'));
    expect(container.firstChild).toMatchSnapshot();
  });
});