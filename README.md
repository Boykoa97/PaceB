The Goal of this project is to match mentors with a mentee. 


A mentee will interact with a form similar to this. The information given from the form will then be matched with a mentor who has a similar form. Emails will be sent to the mentor if they wish to accept the request. Once that is done both users will get an email

![First part of the mentee form](https://github.com/Boykoa97/PaceB/blob/react_tutorial_anthony/images/sampleMenteeForm1.JPG)

![First part of the mentee form](https://github.com/Boykoa97/PaceB/blob/react_tutorial_anthony/images/sampleMenteeForm2.JPG)


To integrate this with firebase once you have the project working with npm start proceed with these instructions. You will need your own firebase account and project to test this. I am not providing the details to my personal account. Once you have a project made for webhosting made. 

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




