import React from 'react'
import {Provider} from 'react-redux'

import store from './src/store'
import View from './src/view'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View />
      </Provider>
    )
  }
}
