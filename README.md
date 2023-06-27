# Ingredient Ideas

### [Click here to see the Video Review]("")

## Proposed Solution

- Checked api to see possible solutions I could create (noted in _[assumptions section](#assumptions)_)
- Create initial designs.
- Use Create React App to setup quickly
- Create a simple UI using a mock api call for both meal search and recipe page
- Add search functionality and id routes
- Split out components from MainPage and RecipePage
- Style with `styled-components`

### [Click here to see the Live Demo]([LINK_TO_THE_DEPLOYED_APP])

## Screenshots

## Assumptions

Based on the scenario, the main feature that I want to show my friend is that we can find meals based on a main ingredient. Having checked the api, there is no way to find results involving `quantity` or be able to filter by `available cooking time`. The `number of ingredients` tend to vary from 1 - 20 ingredients and the `meal type` could also be a possibility.

Based on this, I came up with some initial designs of what the prototype of this app might look like

![Main Page Desktop]()

![Recipe Page Desktop]()

![Main Page Mobile]()

![Recipe Page Mobile]()

After checking the API, there was no way to filter by both `category` and `ingredient` at the same time (\*with it preferring `category`)

## Libraries / Tools Used

- **React.js**
- **Create React App** with TypeScript template for project setup
- **react-router-dom** for page routing
- **styled-components** for styling
- **Jest** for testing

## Setup

To install the dependencies run:

`npm install`

And to run the app:

`npm start`

## Running the tests

You can run the unit tests using:

`npm test`

## Future Work
