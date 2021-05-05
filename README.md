# Search Car from Car Directory
 This is a frontend application where users can search and select their car from a directory of available cars. When brand and model of the car is provided by the user, the available variants of that particular car and model appears from where user can select the exact specification.

## Technologies Used
- React JS
- CSS3
- Jest and React Testing Library

## Demo of the Application
![Alt text](https://github.com/supriti23/select-your-car/blob/main/src/Assets/Demo.gif "Destop View")

![Alt text](https://github.com/supriti23/select-your-car/blob/main/src/Assets/DemoMobile.gif "Mobile View")

## How the Application works
##### Select Car Brand
When the page loads for the fisrt time, you can select the brand of the car from the dropdown of available brands. Start typing the brand name to get suggestions, if the brand exists in the directory.
##### Select Car Model
Once the brand of the car is selected, another text box pops up with the dropdown of the available car models related to the brand provided. If the brand is deleted, the text box for entering the model of the car also disappers as it always related to the brand provided. If there are no available models for the brand provided, and error message is displayed.
##### Search your Car
Upon selecting a paricular barand and model, a search button appears. When the search button is clicked, a list of available car variants appaears for the particular brand and model provided. You can scroll through all the car variants and select one. 
##### Select a Car Variant
Upon selection of the car variant, a modal displaying all the details of the car selected appears on the screen. Select the 'OK' button if you are sure or else, you can close and select another variant.

## System Requirements
Node.js
Here is the link to install node.js in your system - https://nodejs.org/en/download/
## Running the Application
Open terminal in the project directory, you can run:

### Prerequisite
Server should be running. To run the server, fire the below command.
### `node server.js`

### Run the Application on a separate terminal

### `npm install`
All dependencies are installed to run the application.

### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.