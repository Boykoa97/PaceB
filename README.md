# React Tutorial goals

The goal of this project is to make a something that mimics a shopping cart. It will have increment and decrement buttons. A dynamic counter that changes based on value where if its 0 it will change colour. 

So far I am as you can see with this code I am just at the stage with the dynamic counter.

To run this on your local machine you will need npm or yarn

npx create-react-app counter-app
cd counter-app
npm start

It taught me how components interact in react, how to create and adjust items in a react application, it also taught me some naming conventions alongside some how to create functions in javascript and how we should store and build our components for the front end for our project 

the video if you want to do this yourself is 
https://www.youtube.com/watch?v=Ke90Tje7VS0

For the week from Oct 28th - Nov 4th I finished the tutorial as my first task and annotated the code which you can see in the files uploaded this took me about 2 hours because there was over an hour left in the video. My second task was to start and try and mimic the major task that is the mentee form whose information which we will use to find them potential mentors. Below are images show my progress of what this screen looks like I spent 3 hours doing this most of which was trying to find appropriate resources for the calander.

You will need a few extra libraries. Being Datepicker. React calander was added when i was figuring out how we can give the user something to choose dates. This is no way finalized though. So in the case of React Calander it is unused. 

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

firebasee use --add

after running this command select the project you made for running this project

now we need to build the porject. You can do this with whatever package manager you have installed. For npm the command is:

npm run build 

now to test locally in use the command 

firebase serve

then in your browser go to the page http://localhost:5000




