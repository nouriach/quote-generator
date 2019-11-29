# Chuck Norris Joke Generator

A project that utilises the Chuck Norris joke generator api. 
The api was founded because, apparently, "there isn’t a good repository of these jokes on the web":
http://www.icndb.com/api/

# Brief
### The Challenge consists of two main tasks:
1. Random Joke
When the ‘Random Joke’ button is pressed, the app fetches one random joke from the Chuck
Norris server and displays the random joke on screen.

**status: complete**

2. When the ‘Search Joke’ button is pressed, the app goes to a new route with a text field and a
‘Search’ Button. Upon pressing the ‘Search’ Button, the app should request a random joke with
a custom main character as described in the “Changing the name of the main character” section
of the API docs and show it on screen.
First name/last name splitting and input validation needs to be considered.

**status: complete**

### Bonus
3. When the ‘Never-ending Jokes’ button is pressed, the app goes to a new route that contains a
list of random jokes. Jokes should be requested asynchronously, in batches from the server.
When the user scrolls to the bottom of the list, the list shows a loading message indicating that
more jokes are being fetched.
Since the jokes are random, it is fine in this simple task to have duplicate jokes in the list.

**status: ~~incomplete~~**

# Project Screen Shots

# Instalation and Setup Instructions
**Important**: This repo does not have either the node modules or the package.json files included.

Once the repo has been downloaded, navigate to the folder through your terminal/command prompt and hit:

Installation:
npm install

To Run Test Suite:
npm test

To Start Server:
npm start

To Visit App:
localhost:3000

# Reflection
Although the two core requirements in the brief were satisfied, there were some key things I will look to include in the project in the future:

**1.** I will look to integrate Unit Testing into the code to help me create cleaner and more economical code. Potential route: Jest or, if I am feeling ambitious, Cypress.
**2.** Attempt the bonus challenge of the never ending scroll. 
        My early thoughts are that this will require limiting the api call and acknowledging where in the "screen" the user is at the time.
        Once the user approaches a certain position on the screen a call will be made to fetch data from the api once more.
        The state will need to have a value which tracks the user's position and updates accordingly.
**3.** Get the Unsplash API to work to update the joke component images each time a new joke is requested. 
        I started building the component <Image /> and got the api to work however, due to time constraints, wasn't able to properly integrate it.
**4.** I also would like to revisit how the data is fetched and implemented, perhaps using Redux Middleware instead or React Hooks.