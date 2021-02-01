# React Tutorial goals

Pace B objective is to create a web application that can be embedded via an iframe, so a company whose goal is to link mentors and mentees together, can embed into their website. The target user groups include the organization(the admin), the mentors and the mentees. We will be using firebase to host the database. Our chosen techstack is React.js for the front end and Node.js for the backend.

The purpose of linking mentors and mentees is to allow more senior employees to pass on their knowledge to newer employees. Our web app will allow mentees to find mentors using logical checks on fields such as time available, area of interest, etc. to find potential matches. When a mentor-mentee match is successful, the mentee is sent a confirmation email linking them to their mentor, and further interaction and mentorship occurs externally through email.

## Setup
To run this on your local machine you will need npm or yarn

npx create-react-app counter-app
cd counter-app
npm start

![First part of the mentee form](https://github.com/Boykoa97/PaceB/blob/react_tutorial_anthony/images/sampleMenteeForm1.JPG)

![First part of the mentee form](https://github.com/Boykoa97/PaceB/blob/react_tutorial_anthony/images/sampleMenteeForm2.JPG)


to integrate this with firebase once you have the project working with npm start proceed with these instructions. You will need your own firebase account and project to test this. I am not providing the details to my personal account. Once you have a project made for webhosting made. 

Navigate to the directory where this project is stored on the terminal then:

1.  npm install -g firebase-tools
2. firebase login
3. firebase init 
4. yes for ready to proceed 
5. select hosting and database features 
6. select "don't setup a default project" 
7. set the public directory to "build"
8. select "y" for configuring the a single-page-app


now we need to add the project to the project to do this use the command

firebase use --add

after running this command select the project you made for running this project

now we need to build the porject. You can do this with whatever package manager you have installed. For npm the command is:

npm run build 

now to test locally in use the command 

firebase serve

then in your browser go to the page http://localhost:5000




