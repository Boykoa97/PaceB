# Requirements and Design Milestone Report


## Project Description

PaceB objective is to create an embedded iframe that a company can put on their website whose goal is to link mentors and mentees together. We will be using _____ to host the database and _____ for the webserver. Our chosen techstack is _____ front end and _____ backend. The purpose of linking mentors and mentees is allow more senior employees to pass on their knowledge to newer employees. Our piece of software will allow mentees to find mentors using logical checks on fields such as time available, area of interest, etc. to find potential matches. 

We have 3 target users:
1. Each orginazition will have an admin user that will setup be set up by them. This admin user will verify their employees and handle personilization for their account.
2. Mentors. Mentors are senior employees who have knowledge that can help guide the newer employees. Their skillset and availablity will be matched and shown for mentees to find a mentor
3. Mentees. Mentees will fill out what they are looking for in a mentor. Our software shows potential matches and then the mentee pickes a mentor from that list.


## Functional Requirements 
**Peer Evaluation 1/Milestone 1, December 2nd 2020**

Summary of deliverable: By this milestone we intend to have a rough skeleton of what the final web app will look like. A starting page will exist, showing the general layout of the app, and some basic features will be included.

Milestone 1 Goals:
1. Create a database
   * Add section for mentor accounts
   * Add section for mentees
   * Add subsection to both as account properties, includes details needed for matching
2. Mentors should be able to create an account and log in
   * Have a functional create an account page
   * Should be able to link account information to the database
   * Have a functional create a login page
   * Should be able to correctly and securely authorize mentors accounts
3. Mentees should be able to request mentors
   * Have a functional mentee request form, including what they want to learn and when
   * Should have database functionality for mentee requests
   * When accepted, mentees then should be able to request a time on a mentors calendar
   
**Peer Evaluation 2/Milestone 2, March 3rd 2021**

Summary of deliverable: By this milestone we intend to have most of the functionality of the app completed. all of the basic functions should work correctly, and some of the advanced functions should work as well.

Milestone 2 Goals:
1. Mentees should be able to request mentors(continued)
   * Have a functional mentee request form, including what they want to learn and when
   * Should have database functionality for mentee requests
   * When accepted, mentees then should be able to request a time on a mentors calendar
2. Mentor/mentee matching functionality 
   * Should be able to match mentors and mentees based on desired language/technology
   * Should be able to match mentors and mentees based on available times/time zones
   * Mentors should be able to have multiple mentees, but mentees should only have 1 mentor
3. Mentors should be able to list how and when they can be mentors
   * Should be able to choose languages they can teach
   * Should be able to list what times that they are free, should have functionality to work with different time zones
   * Both of these should be able to be added as values in the database
4. Mentors should be able to accept mentee requests
   * After matching, mentors should see a list of available mentees
   * Mentors then should be able to accept or reject requests
   * Should correctly send an email to mentees when matched
   
**Project Deadline/Milestone 3, April 8th 2021**
  
Summary of deliverable: By this milestone the web app should be completed, including admin and organization functionality. All requirements will be finished. 

Milestone 3 Goals:
* Admin and organization functionality
   * Organizations  should be able to host the web app, and therefore should have one organization admin per webapp instance
   * When setting up the web app, an organization admin account should be created
   * Admins should then be able to invite mentors through email, once a invitation is accepted, mentors should be able to create an account
   * After a mentor account is created, they should then be needed to be approved by the admin
   * Mentors should only have limited access if not approved by an admin, once they are, the webapp should then work like normal
   
## Non-functional Requirements 


## Tech Stack Options
**Front End:**
- React.js:
- Vue.js:
- Angular.js:

**Back End:**


## Testing Procedure 
