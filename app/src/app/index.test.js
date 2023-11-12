/* global it */
import React from 'react'
import ReactDOM from 'react-dom'
import data from '../data.json'
import App from './index.js'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App data={data} />, div)
  ReactDOM.unmountComponentAtNode(div)
})
