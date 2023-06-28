# Ingredient Ideas

### [Click here to see the Video Review](https://www.loom.com/share/8477490ae2a34f58a3a7c17a161ab1f4)

## Proposed Solution

- Checked api to see possible solutions I could create (noted in _[assumptions section](#assumptions)_)
- Create initial designs.
- Use Create React App to setup quickly
- Create a simple UI using a mock api call for both meal search and recipe page
- Add search functionality and id routes
- Split out components from MainPage and RecipePage
- Style with `styled-components` (multiple breakpoints and css theme)
- Unit Testing with `Jest`

### [Click here to see the Live Version](https://ingredient-ideas.netlify.app/)

## Screenshots

![Main Page Desktop](./public/images/Main%20-%20Desktop.png)

![Recipe Page Desktop](./public/images/Recipe%20-%20Desktop.png)

![Main Page Mobile](./public/images/Main%20-%20Mobile.png)

![Recipe Page Mobile](./public/images/Recipe%20-%20Mobile.png)

## Assumptions

Based on the scenario, the main feature that I want to show my friend is that we can find meals based on a main ingredient. Having checked the api, there is no way to find results involving `quantity` or be able to filter by `available cooking time`. The `number of ingredients` tend to vary from 1 - 20 ingredients and the `meal type` could also be a possibility.

Based on this, I came up with some initial designs of what the prototype of this app might look like

![Main Page Desktop](<./public/images/Main%20Desktop%20(I).png>)

![Recipe Page Desktop](<./public/images/Recipe%20Desktop%20(I).png>)

![Main Page Mobile](<./public/images/Main%20Mobile%20(I).png>)

![Recipe Page Mobile](<./public/images/Recipe%20Mobile%20(I).png>)

After checking the API, there was no way to filter by both `category` and `ingredient` at the same time (_with it preferring `category`_)

Made some adjustments to this design in the styling of the pages

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

- Use the rest of my friend's API and filter by meal type (Vegan, Vegetarian, Gluten Free, etc.)
- Increase code coverage and expand on tests
