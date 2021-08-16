# CEST Coworking and Event Space
Group project with 4 people working oi it. Time for development - just over a week. Here we had to build full stack product, which is a take at WeWork website. 

<h2>Brief:</h2>
Website, which allows people to find office or hot desk around the globe. We had to use database we made ourselves, and data stored in it. User can browse this website as a guest, find out where our imaginable partners located on the map, also read short descriptions about them and add their own workspace to our website.
When registered and logged in, CRUD functionality is available, and user can also comment and leave ratings to the venues. 



<h2>Key features:</h2>
Ability to browse the look up for venues in search bar, map with displayed venues, comments and rating, registering of own workspace.

<h2>Deployed project:</h2>
<a href="https://cest-sei-project-3.herokuapp.com/">CEST Coworking and Event Space</a>

<h2>Tech used:</h2>
<li>React, Mongoose,  - frontend</li>
<li>Node.js, MongoDB, Express - backend</li>
<li>Bootstrap, with ocasional Bulma and little of custom CSS - styling.</li>

<h2>Sample screenshots:</h2>

![Screenshot 2021-08-13 at 16 14 22](https://user-images.githubusercontent.com/81250034/129362445-1b16973a-0083-4d74-a9b0-42df94f08584.png)
<br>
![Screenshot 2021-08-13 at 16 15 36](https://user-images.githubusercontent.com/81250034/129362671-3bd06986-5ab1-4093-bc69-a3e25a06c39b.png)

<h2>Build:</h2>
<li>Create express application and get backend server running for your API. Define schemas for workspaces and comments, set up models for workspaces and users, make sure that you create right relationship (embedded - such as comments depending on workspace, reference - when user is assigned as "owner" of "workspace" in schema, reverse - when we loop through model "workspaces" and check, whether if any are "onwed" by user by comparing id's), create seeds files, process all needed requests of CRUD</li>
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
Need to mention here, that all sensitive data (password) is stored in encrypted format, hashed and salted, removed from JSON. 
<br>
<br>
<hr>
<li>Looking at the frontend, I had to solve an issue of getting a particular comment to be deleted:</li>
<br>
<img width="963" alt="Screenshot 2021-08-16 at 23 32 48" src="https://user-images.githubusercontent.com/81250034/129625962-be236ecf-3e5c-4529-b6c8-ff6b5b5bf027.png">
I had to use ternary and onMouseOver with onClick together, to perform the action, where only user who added the comment can delete it.
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
<li>It was great practice on array methods and interval management, as well as using "for loop" and getElement functions. Perfect kind of project for beginners to solidify their knowledge of JavaScript</li>
<li>I have designed this game myself, so the sounds I was using had to be "cut" to particualr pieces, as they had to fit sertain timeframes in my interval-paced game. Good fun and valuable experience.</li>

<h4>Challenges</h4>
<li>The most challenging part was defining a collision between alien bullet and player, as it is a multi-conditional function, that not only checks, if player was hit, but defines the movement of alien projectile.</li>
<li>Another very imlortant part, that was hard enough - styling. I wanted to create perfectly playable game, so I spend quite some time looking for right resources and making them look like a solid product.</li>

<h2>Potential improvements:</h2>
<li>Pause game functionality.</li>
<li>Mute functionality.</li>
<li>2 players functionality - 2 simultaneously and/or turn taking.</li>
<li>Difficulty levels, increasing speed of movement of aliens etc.</li>\

<h2>My colleagues, who also worked on this project:</h2>
<a href="https://github.com/emilesherrott">Emile Sherrot</a> | <a href="https://github.com/sarandis10">Sarantis Atonakas</a> | <a href="https://github.com/crigrande">Cristina Grande</a>
