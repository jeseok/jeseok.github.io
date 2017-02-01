import React from 'react'
import { MainContainer } from 'containers'
import { Profile, LangButton, ListView, TimeLineListView, Contact} from 'components'
import { shallow, mount, render } from 'enzyme';

describe('Testing', () => {
  it('MainContainer should display Header component', () => {

    expect(shallow(<MainContainer />).contains(<Profile />)).toBe(true);

  });

});
