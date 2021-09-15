# CEST Coworking and Event Space

<h2>Overview:</h2>
Software Engineering Immersive Course - Project-3 - Group Project - 10 days.

<h2>My colleagues, who also worked on this project:</h2>
<a href="https://github.com/emilesherrott">Emile Sherrot</a> | <a href="https://github.com/sarandis10">Sarantis Atonakas</a> | <a href="https://github.com/crigrande">Cristina Grande</a>

<h2>Brief:</h2>
Group project with 4 people working on it. Time for development - just over a week. Task was to build full stack product, with CRUD functionality and registration/login features. 

<h2>Description:</h2>
The project is a website, which allows people to find office or hot desk space around the globe. We had to use a database we made ourselves, along with the data stored within it. Users can browse this website as a guest, find out where our imaginable partners are located on the map, read short descriptions about them and add their own workspace to our website. When registered and logged in, CRUD functionality is available, and users can also comment and leave ratings to the venues.

<h2>Key features:</h2>
The site has the following key features: the ability to browse and look up venues in the search bar, map with displayed venues, comment and rate, register of own workspace.

<h2>Deployed project:</h2>
<a href="https://cest-sei-project-3.herokuapp.com/">CEST Coworking and Event Space</a>

<h2>Tech used:</h2>
<li>React Library - frontend.</li>
<li>Node.js, MongoDB, Mongoose, Express - backend.</li>
<li>Bootstrap, with occasional Bulma and little of custom CSS - styling.</li>

<h2>Sample screenshots:</h2>

![Screenshot 2021-08-13 at 16 14 22](https://user-images.githubusercontent.com/81250034/129362445-1b16973a-0083-4d74-a9b0-42df94f08584.png)
<br>
![Screenshot 2021-08-13 at 16 15 36](https://user-images.githubusercontent.com/81250034/129362671-3bd06986-5ab1-4093-bc69-a3e25a06c39b.png)
<br>

https://user-images.githubusercontent.com/81250034/129632519-39ea71a3-3b1c-4fa8-9156-64603f8ed612.mov

<br>

<h1>Approach</h1>

<h2>Build:</h2>
<li>Create express application and get backend server running for your API. Define schemas for workspaces and comments, set up models for workspaces and users, make sure that you create right relationship (embedded - such as comments depending on workspace, reference - when user is assigned as "owner" of "workspace" in schema, reverse - when we loop through model "workspaces" and check, whether if any are "owned" by user by comparing id's), create seeds files, process all needed requests of CRUD.</li>
<li>Create routing with defined API endpoints, test requests and move onto authentication, create token for user registering and logging in, make sure, you removing sensitive data from your requests (such as password and its validation). Create a secure route component, and apply it to routes that need to be protected from unauthorized use.</li>
<li>Move on to frontend. Create React app, update proxy middleware with port from backend, install axios, use 'api/' prefix on all axios requests you send to your API. Add react-router-dom, use Router, Switch and Route to establish the connection between components. Install React-Bootstrap and start developing the frontend functionality of the project.</li>
<li>Build your components, handling the requests and errors, storing data at state instances and using one for rendering. Use token set from backend as authentication piece allowing certain functionality on conditional ternaries, dependant on id match of current user and one, who created information piece, ex. "comment".</li>
<br>
(for more detailed examples see "sample code")
    
<h2>Sample code:</h2>
<li>Here we can see, how secure route is working at our backend:</li>
<br>
<img width="614" alt="Screenshot 2021-08-16 at 22 28 16" src="https://user-images.githubusercontent.com/81250034/129619301-22bd7f71-a3ce-468a-96d5-cb31bb88121c.png">
In this asynchronous function, we first check, if our "headers" are present, and if so, we try to verfify our user through JWT payload.
<br>
<br>
User, who we try to verify has to be found by his id, which is "sub" in our token payload and if user is found we can move towards next function utilizing next().
<br>
<br>
<hr>
<li>Here is our schema for "workspace", our main API "unit", with embedded and reference relationship with "comments and "user" respectively:</li>
<br>
<img width="613" alt="Screenshot 2021-08-16 at 22 46 47" src="https://user-images.githubusercontent.com/81250034/129620911-8c150ef4-92ae-41a3-816d-37729adbde70.png">
Good example of setting a virtual field of avgRating to schema making sure it is set to JSON when response has been sent back from API.
<br>
<br>
Both "comments" and "workspaces" have referenced owner field, which will be represented through Id.
<br>
<br>
<hr>
<li>Closing backend, let have a look at how Register/Login business works:</li>
<br>
<img width="821" alt="Screenshot 2021-08-16 at 23 05 11" src="https://user-images.githubusercontent.com/81250034/129623053-c7dff7f5-97dd-4c9d-9e99-eb8127cf6b6c.png">
It takes data from frontend register forms, and sends it as JSON request body to API. If validation is passed, returns positive, if not - error.
<br>
<br>
When logging in, we use email and password for identification. In DB, function finds user matching (if any) email from request body.
<br>
<br>
Then it validates the password. So happy with prebuilds, awesome. If email is not found or validation of password has failed - error.
<br>
<br>
Passing check, we also give that user a "token", made of expiry, secret, and sub of his id, which is generated by MongoDB.
<br>
<br>
<hr>
<li>Looking at the frontend, I had to solve an issue of getting a particular comment to be deleted:</li>
<br>
<img width="963" alt="Screenshot 2021-08-16 at 23 32 48" src="https://user-images.githubusercontent.com/81250034/129625962-be236ecf-3e5c-4529-b6c8-ff6b5b5bf027.png">
I had to use 4 layered ternary and onMouseOver with onClick together, to perform the action, where only user who added the comment can delete it.
<br>
<br>
Whole set of JSX is written with help of Bootstrap, another great framework to use. It was my first attempt to use it.
<br>
<br>
<hr>
<li>Another great thing to see on the homepage, carousel.</li>
<br>
Just 20 lines of code in JSX.
<br>
<br>
<img width="911" alt="Screenshot 2021-08-17 at 00 40 11" src="https://user-images.githubusercontent.com/81250034/129632910-d0bdd79b-27a2-4c56-bde4-feae630b5313.png">
<h2>Wins and challenges:</h2>
<h4>Wins</h4>
<li>Great possibility to develop both sides of MERN APP, where I was concentrating on Authentiaction at the backend and Event section at the frontend.</li>
<li>Perfect opportunity to practice MongoDB, solidifying knowledge about relationships and modelling.</li>
<li>Lovely occasion of group programming, using GitHub collectively, practising version control and branch adjustments. Fantastic experience working as a part of great team, probably one of the most important experiences during the course. </li>

<h4>Challenges</h4>
<li>There was quite a difficult way to manage error handling on the contact form I created, I used default methods, which is still a point to improve.</li>
<li>Time-management, where we had to adjust our group work to 3 different time zones, balancing with self-development and healthy life.</li>
<li>Version control was quite challenging. I had to throw our development branch back once and restore data to needed condition, trying to resolve unnecessary node modules being pushed to it. Great fun!</li>

<h2>Potential improvements:</h2>
<li>Make server send emails when registering.</li>
<li>Shopping cart functionality, with potential booking slots available.</li>
<li>Functionality for the map definitely needs improvements, all markers on it displayed simultaneously for now.</li>
<li>I would love to implement pin on map in order to set up location for workspace, rather than typing it in when trying to register new one.</li>
