# Capstone Pace B

## Description

  Pace B's objective is to create a web application for companies looking to implement a mentorship program, and link mentors and mentees together. The target user groups include the organization(the admin), the mentors and the mentees. The purpose of linking mentors and mentees is to allow more senior employees to pass on their knowledge to newer employees.
  
  This web application provides the admin and its mentors with the ability to create and access their user accounts. The mentees can not create user accounts, as they sign up for mentorship through a form embedded on their desired company’s website, via an iframe. It will allow mentees to match with mentors using logical checks based on their preferred skills. When a mentor-mentee match is successful, the mentee is sent a confirmation email linking them to their mentor, and further interaction and mentorship occurs externally through email.

## User Groups and Registration

  An admin will interact with a form similar to the image below. The information given from the form will then be used to create the organization, as well as the admin user account. The admin account has the features of a mentor account. It also has added features including the ability to invite mentors to the organization via email, and the ability to embed the mentee form into an external website via an iframe.
  
<img src="https://github.com/Boykoa97/PaceB/blob/dev/images/Screen%20Shot%202021-04-13%20at%2012.16.53%20AM.png" alt="admin form" width="300" height="400">

  A mentor will interact with a form similar to the image below. A mentor can only signup using the form, with the email the admin addressed an invite to. The information given from the form will then be used to create the user's mentor account. The mentor has the feature to accept or reject mentees who have signed up for mentorship. Once a mentor accepts a mentee, a confirmation email is sent to the mentee who has just been accepted.
  
<img src="https://github.com/Boykoa97/PaceB/blob/dev/images/Screen%20Shot%202021-04-13%20at%2012.17.53%20AM.png" alt="mentor form" width="320" height="400">

A mentee will interact with a form similar to the image below. The information given from the form will then be sent to the organization for the mentors to see. When a user signs up as a mentee, they are sent a confirmation email. They are also sent a confirmation email when a mentor accepts them for mentorship.

<img src="https://github.com/Boykoa97/PaceB/blob/dev/images/Screen%20Shot%202021-04-13%20at%2012.14.43%20AM.png" alt="mentee form" width="400" height="430">

## Setup

1. clone the directiory from the repo (contains both frontend and server code)
2. install Node.js v14.15.0. to whichever machine will run the server
3. npm install 
4. Install PhpMyAdmin and MySql for the server ( we used latest versions as of feb 2021 )
5. Aquire email for the mailing features. Note currently nodemailer is using gmail and secure = FALSE. Adjust the code in sendMail.js if needed. Also for instance a gmail account can only send 500 emails a day. So depending on usage switch providers. Gmail accounts are by default set to true for secure. So either change the gmail setting or adjsut the input parameters.
6. Setting up firebase 

First to setup firebase you will have to make an account. Currently our project using only features from the free "spark" plan. If your usage is larger you may need to ugrade plans here.

Next you need to create a project 

<img src="https://github.com/Boykoa97/PaceB/blob/dev/images/Firebase%20step%201.JPG">

First we will set up authentication by following 

<img src="https://github.com/Boykoa97/PaceB/blob/dev/images/Firebase%20step%202.JPG">

Next to find the information require to create the firebase object look below.

<img src="https://github.com/Boykoa97/PaceB/blob/dev/images/Firebase%20step%203.JPG">

Lastly this is incase there still is a dependency with the admin sdk for firebase create the admin sdk following the instructions below. Treat this like an .env file whereas the firebase api information doesn't need to be kept private this file does. Also this resource is what is required to access information from other users in your firebase project so you may wish to add it anyways. 

<img src="https://github.com/Boykoa97/PaceB/blob/dev/images/Firebase%20step%204.JPG">

The final step is to adjust the .env you setup on your local machine to follow the template of ".env_example"

To test this project on your local machine using two terminal do the following commands 

1. npm run server
2. npm start

The first command is for hosting the server and the second command is for hosting the frontend locally

## Hosting Example 

To integrate this with firebase once you have the project working with npm start, proceed with these instructions. You will need your own firebase account and project to test this. I am not providing the details to my personal account. Once you have a project made for webhosting made. This is if you wish to use firebase for your hosting site as well

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

now we need to build the project. You can do this with whatever package manager you have installed. For npm the command is:

npm run build 

now to test locally in use the command 

firebase serve

then in your browser go to the page http://localhost:5000 for testing the local host with firebase hosting. 

firebase deploy

to make the site go live

make sure you update the server to listen to the url under the 

"proxy": "http://localhost:4444/",

in package.json 

The link above will specify that it will listen to port 4444 of localhost. 
