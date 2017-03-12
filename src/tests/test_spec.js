import React from 'react'
import { MainContainer } from 'containers'
import { Profile, LangButton, ListView, TimeLineListView, Contact} from 'components'
import { shallow, mount, render } from 'enzyme';
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import raw_data from 'data/data'
import { createStore } from 'redux'
import lang_reducer from 'redux/modules/lang'
import * as langActionCreator from 'redux/modules/lang'


describe('lang reducer', () => {

  const expectedDefault = {
    currentLang : "en",
    data: raw_data.data
  }

  it('should return the initial state', () => {
    expect(
      lang_reducer(undefined, {})
    ).toEqual(
      expectedDefault
    )
  })

});

describe('<MainContainer />', () => {

  const currentLang = "en"
  const store = createStore(lang_reducer)
  const data = raw_data.data
  const nameToDisplay = data.profile.name[currentLang]
  const descriptionToDisplay = data.profile.description[currentLang]

  it('checking current languages after mount', () => {
    const wrapper = mount(<Provider store={store}><MainContainer /></Provider>)
    expect(wrapper.find('MainContainer').hasClass('outer-frame')).toBe(true)
    const targetProps = wrapper.find('MainContainer').props()
    expect(targetProps.currentLang).toEqual(currentLang);

  });

});
