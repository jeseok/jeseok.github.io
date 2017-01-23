import React from 'react'
import { MainContainer } from 'containers'
import { Header } from 'components'
import { shallow, mount, render } from 'enzyme';

describe('Testing', () => {
  it('MainContainer should display Header component', () => {

    expect(shallow(<MainContainer />).contains(<Header />)).toBe(true);

  });

  it("contains spec with an expectation", function() {
    expect(shallow(<Header />).contains(<h1> {'header'} </h1>)).toBe(true);
  });
});
