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

To integrate this with firebase once you have the project working with npm start, proceed with these instructions. You will need your own firebase account and project to test this. I am not providing the details to my personal account. Once you have a project made for webhosting made. 

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

then in your browser go to the page http://localhost:5000




