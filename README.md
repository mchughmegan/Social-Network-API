# Social-Network-API
UTA Bootcamp Challenge 18

![License: MIT](https://img.shields.io/badge/License-MIT-yellow)

## Description

This project uses MongoDB to create a Social Media API Back End application. Once entering the applicable commands in the terminal to install all necessary dependencies, including dotenv, express, and mongoose, the user will be able to view their routes regarding users, friends, thoughts, and reactions in Insomnia.

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Questions](#questions)

## Installation

In VS Code, enter the following in the Integrated Terminal to install the applicable packages for this application:

```
npm install
```
Then, run the following:
```
node server.js
```

## Usage

To view a video walkthrough of the application, click on this link https://drive.google.com/file/d/1_r0A9WS0ImiNJni6dzgjceadmuw27xpM/view.

After running the necessary commands in the integrated terminal as explained above in Installation, the user will see API Server running on port 3001! in their Integrated Terminal. 
![npm install](https://github.com/mchughmegan/Social-Network-API/blob/main/assets/npm%20install.png)

![node server.js](https://github.com/mchughmegan/Social-Network-API/blob/main/assets/node%20server.js.png)

The user will then open Insomnia, and use the routes for users, friends, thoughts, and reactions.

To add a user, the Social Network API user will need to enter a username and email.

To add a friend, a user ID and a friend ID will need to be added to the route.

To add a thought, the user will need to enter a thoughtText and a username.

To add a reaction, the user will need to enter a reactionBody and a username.

To delete a user, the Social Network API user will need to include a user ID in their route.

To delete a friend, the user will need to include a user ID and friend ID in the route.

To delete a thought, the user will need to include the thought ID in their route.

To delete a reaction, the user will need to include the thought ID and reaction ID in their route.

The user will be able to view one thought or one user by enter the user ID or thought ID to the users route or thoughts route as applicable.

And lastly, the user will be able to view all users or all thoughts.

## Credits

Thank you to the contributors to npmjs.com for the necessary dependencies for this application.

Thank you to MDN Web Docs for the tutorial on routes, found here https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes.

Thank you to mongoosejs.com for tutorials on Models, Connections, and Timestamps.
https://mongoosejs.com/docs/api/model.html
https://mongoosejs.com/docs/connections.html
https://mongoosejs.com/docs/timestamps.html

## License
    
    This project is licensed under the MIT License. To learn more about this license, go to:
https://opensource.org/licenses/MIT 

## Questions

If you have any questions, please contact me at megan.mchugh@gmail.com.
For more of my work, please refer to my GitHub page:
[mchughmegan](https://github.com/mchughmegan/)
