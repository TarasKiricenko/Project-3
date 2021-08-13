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
<li>Here you can see, how the bullet moves and what are the conditions:</li>
<br>
First function defines what to do if a "cell" contains a particular class, and if right key is pressed, adds a bullet
<br>
<br>
Second function is running on interval, and moves the bullet up to the top of game field and removes it when bullet reaches top border.
<br>
<br>
<img width="650" alt="Screenshot 2021-08-11 at 14 34 16" src="https://user-images.githubusercontent.com/81250034/129022002-e2b971bb-f0b6-46b3-bea9-0d6df0625ee4.png">
<br>
<li>Here you can have a look at the another functional part:</li>
<br>
This functions defines what happens when you hit the alien:
<br>
<br>
* It checks, if first of all you do have 2 classes in one "cell" first
<br>
* Add points to your score span.
<br>
* Removes both alien and bullet, and sets explosion class to that cell.
<br>
* Takes aliens (as array) and splices that array at the index of killed alien.
<br>
* Finally, if that was the last alien, shows victory message.
<br>
<br>
<img width="837" alt="Screenshot 2021-08-11 at 14 46 24" src="https://user-images.githubusercontent.com/81250034/129023587-104ed98f-9275-4f46-b0fc-597c0a68edcb.png">

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
<li>Difficulty levels, increasing speed of movement of aliens etc.</li>
