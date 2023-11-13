/* global it */
/* eslint-env jest */
import React from 'react'
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'
import data from '../data.json'
import App from './index.js'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App data={data} />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders owner username and location data successfully from data.json', () => {
  // Create a div to render component into
  const div = document.createElement('div')

  // Render App component with provided data into the div
  ReactDOM.render(<App data={data} />, div)

  // Query for the respective owner-related data
  const ownerProfilePicElement = div.querySelector('.owner-profile-pic')
  const ownerUsernameElement = div.querySelector('h2')
  const ownerLocationElement = div.querySelector('p')

  // Assert that the owner profile picture element exists and its src attribute matches the profile_pic_url in the data
  expect(ownerProfilePicElement).toBeTruthy()
  expect(ownerProfilePicElement.getAttribute('src')).toBe(
    data.owner.profile_pic_url
  )

  // Assert that the owner profile picture element exists and its alt attribute is present
  expect(ownerProfilePicElement).toBeTruthy()
  expect(ownerProfilePicElement.getAttribute('alt')).toBe(
    'The Aston Villa Football Club logo, with the emblem surrounded by a multicolored ring, tinted red in the top left and orange in the bottom right'
  )

  // Assert that the owner username element exists and its text content matches the username in the data
  expect(ownerUsernameElement).toBeTruthy()
  expect(ownerUsernameElement.textContent).toBe(data.owner.username)

  // Assert that the owner location element exists and its text content matches the location name in the data
  expect(ownerLocationElement).toBeTruthy()
  expect(ownerLocationElement.textContent).toBe(data.location.name)

  // Clean up - unmount component from div to avoid memory leaks
  ReactDOM.unmountComponentAtNode(div)
})

it('should toggle aria-pressed between false and true when button clicked', () => {
  // Create a container element for rendering the component
  const container = document.createElement('div')

  // Render the component and handle any side effects within an act block
  act(() => {
    ReactDOM.render(<App data={data} />, container)
  })

  // Retrieve the button element from the rendered component
  const button = container.querySelector('button')

  // Assert aria-pressed should initially be set to 'false'
  expect(button.getAttribute('aria-pressed')).toBe('false')

  // Simulate a button click within an act block
  act(() => {
    button.click()
  })

  // Assert aria-pressed should be 'true' after first button click
  expect(button.getAttribute('aria-pressed')).toBe('true')

  // Simulate another button click within an act block
  act(() => {
    button.click()
  })

  // Assert aria-pressed should be 'false' after second button click
  expect(button.getAttribute('aria-pressed')).toBe('false')
})
