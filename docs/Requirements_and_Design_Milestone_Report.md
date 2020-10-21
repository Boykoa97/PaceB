# Requirements and Design Milestone Report


## Project Description

PaceB objective is to create an embedded iframe that a company can put on their website whose goal is to link mentors and mentees together. We will be using firebase to host the database. Our chosen techstack is React.js front end and Node.js backend. The purpose of linking mentors and mentees is allow more senior employees to pass on their knowledge to newer employees. Our piece of software will allow mentees to find mentors using logical checks on fields such as time available, area of interest, etc. to find potential matches. 

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
   * Organizations should be able to create an account, the individual who does becomes the organization admin for that organization
   * Admins should then be able to invite mentors through email, once a invitation is accepted, mentors should be able to create an account
   * Admins should be able to create new organization admins
   * Admins should be able to delete mentor accounts
   * Admins should be able to generate a iframe, that can be posted on other sites and be used by mentees

## Non-functional Requirements
* **Security** is one of the most important requirements, as we must be able to guarantee our client’s company and its users’ data are well protected against attacks.
* **Usability** is important, as we want our client and its users to be able to navigate the web app quickly and easily.
* **Reliability**, as lots of tests must be ran to minimize critical failures.
* **Performance**, as the web app must be able to create user accounts, submit forms to appropriate companies, connecting mentors to mentees quickly and efficiently.

## Constraints
* **Cost** is a top constraint, as we may have to sacrifice having the best possible product, due to a limited budget.
* **Browsers** that are supported by our web app, as well as devices compatible, are also major constraints.
* **Storage**, which determines how much data from the web app can be stored.
* **Deadline** for the final product is also a constraint, as more time may be needed to incorporate features that could help create the best product.

## Data Flow Diagrams 

![Image of DFD level 0](https://github.com/Boykoa97/PaceB/blob/Project-Requirements/docs/DFD%20Lvl0.JPG)

In our level 0 diagram it shows our 3 main users and the top level process that they interact with. This process is the embedded iframe which hold the matching software.

![Image of DFD level 1](https://github.com/Boykoa97/PaceB/blob/Project-Requirements/docs/DFD%20Lvl1.JPG)

On our level 1 for the DFD we have 5 processes. Alongside 3 datastores. How this works is an admin creates the organization account. They invite the mentors. Mentors fill out the form with their preferences and other information we need. They sign in and are show a screen. This information is stored. While conversely a mentee fills out an application and is shown these potential mentors and their information is stored. The mentee then chooses a mentor and that choice is stored so that the respective mentor can be notified. The mentor then chooses to accept the mentee or not. 

## Tech Stack Options
### Front End:

**React.js (client's preference)**:
* Pros:
  - Useful for creating dynamic web applications, and makes use of JavaScript Extension. This extension allows the use of html tags in the designing and creative construction of the web application.
  - It has virtual DOM, which helps improve the performance of the web application. Instead of writing directly to the DOM and reducing the web application’s performance, the virtual DOM allows us to write virtual components that reflect in the DOM, for better performance.
  - Allows many options from the JavaScript library, for added flexibility and ability to design the web application to our satisfaction.
* Cons:
  - JavaScript Extension could be complex to work with, as opposed to traditionally using html to design the web application.
  - Apparent concern that search engines can’t index dynamic web pages with client-side rendering. Which could pose a challenge for us if we were to incorporate search engines into our web app.
  - The fast paced update of React’s tools and technologies can make it difficult for accurate documentation. It can also make it difficult and distracting to focus on the changes and upgrades to the tools and technologies, instead of fully focusing on web app development.

**Vue.js**:
* Pros:
  - Easy to learn, and has a helpful user community of developers.
  - Well known for its scalability and versatility, as it can be modified, changed and scaled to fit the developer’s preferences.
  - It’s reactive and works well for single page and real time application development.
* Cons:
  - There are usually problems with using apps developed using Vue, on older versions on web browsers.
  - Small community of vue users, which makes it difficult for collaborative development. Also, the framework was created by a Chinese company, in Chinese language, so most members in the community are non-English speakers and may not be of much help when needed.
  - Does not have many of the common plugins used for working with other tools for easier and more efficient development.

**Angular.js**:
* Pros:
  - Supports caching, thereby reducing burden on server CPUs for better performance.
  - Supports faster and easier two-way data binding.
  - Implements the model-view-viewmodel concept which is a strong foundation for application performance and easy management.
* Cons:
  - Browsers are often slow to render web applications designed with this frameworks, which could be time consuming.
  - It has scopes that are layered hierarchically, and are complex to handle especially during debugging processes.
  - Can sometimes be difficult to learn; Can only really enjoy the full benefits of using this framework after lots of experience.

### Back End:

**Node.js (client's preference)**:
* Pros:
  - Allows for the frontend and backend to be developed with the same language. This makes it easier for both frontend and backend developers to be on the same page. They can also help eachother out too. 
  - Simultaneous request handling through non-blocking IO operations and asynchronous request handling. This means node.js can handle multiple request concurrently leading to very fast performance 
  - Uses a microservices architecture. Meaning features are made to be compartmentalized and allows for flexibility and ease of adding additional features. This is achieved by each feature being allowed to use different frameworks for each service. This framework also allows for each of these features to be independent of one another further easing integration.  
  - Can run on Relational or NoSql databases 
* Cons:
  - Requires lots of 3rd party libraries to do many of the tasks needed. So vigilance on the the quality of those libraries is key
  - Does not support multithreaded meaning node.js will struggle 
  - The asynchronous nature that gives Node a very fast runtime also means callback functions can get out of hand affecting readability and maintenance. 

**PHP**:
* Pros:
  - Been an industry standard for many years. This means there is a large community who know the language and many are many resources for it
  - Has its own unit testing feature called PHPUnit which makes testing easy to implement
  - Tons of frameworks for this language due to its popularity being so high for many years. Such as Laravel, CodeIgniter, and Symfony are all examples of PHP frameworks
* Cons:
  - Is very slow due to the features the php frameworks use to speed up development
  - Can only use relational databases 
  - Frameworks limit your ability to modify core behaviour

**Python**:
* Pros:
  - Easy to learn
  - Lot of resources for beginners 
  - Lots of libraries for machine learning and other technical skills
* Cons:
  - Not type-safe. This is because it doesn’t have a strong static type check meaning data type errors don’t occur till runtime which can cause major problems.
  - Slower language to run

### Database:

**Firebase (client's preference)**:
* Pros: 
  - Vast availability of features
  - Access to google analytics 
  - Robust crash report to help spot bugs
* Cons:
  - Struggles with complex queries. Due to it being a realtime database
  - Limited data migration because you do not host the data.
  - Limited support on IOS. however we aren’t making an app so it should be the biggest concern

**Google Cloud**:
* Pros:
  - Easy integration with all other google software
  - Access to google cloud storage 
  - Live Migration which reduces downtown during maintenance.
* Cons:
  - Costs money
  - Slow rate of innovation
  - Poor customer support

**AWS**:
* Pros:
  - Fast and agile as in the service is easy to set up
  - Scalable data storage 
* Cons:
  - Costs money
  - Difficult to switch services 
  - No compensation for data loss

## Testing Procedure 

For our testing procedure we will be using an array of tools each with a purpose. We have two tools for unit testing and coverage testing being Jest and React-testing-library. Jest will be used for both the frontend and the backend for testing functionality and make sure cases are handled for the majority lines of code. Looking for 80% coverage. React-testing-library is solely for the frontend. It allows us to have greater feedback than the true/false asserts that Jest does. It also lets us test the component values of the frontend. To make sure we are following the coding practices for our frontend and backend Linter allows us to set up rules on name, spacing and other various formatting styles coders have. This will also keep each group member consistent between members which will really help seeing as we are all acting as fullstack programmers. For continuous integration we plan using githubs built in features for this. For regression testing jest allows us to do a mockup of the browser with jdom so combined with React-testing-library we can extensively test that new code won’t break the frontend. 

## Questions

Q1: Which tech stack are you using in the end?

A1: React.js for the front end. Node.js for the backend and firebase for the database

Q2: What does it mean for a company to run your software in-house?

A2: They host the service on their own database rather than us doing it on our firebase server

Q3: How will your application handle when a Mentee or Mentor deletes their account (if you have incorporated that). Will this mess up the db for matched mentees and mentors or do you have a way to handle this?

A3: We only just started talking about deleting. So the kinks in the database would yet need to be explored. Currently it looks like it would likely cause a problem and need to be changed 

Q4: Can you not create a set of slides for requirements so that we don't just have a visual of a pdf wall of text - resolution is otherwise too small?

A4: Sorry will adjust our presentation style for the next time.

Q5: How are you going to implement the security? How are you going to stop malicious attacks? Is this a paid program? Do mentors get paid? Who can be a mentor?

A5: Firebase has an authentication service built in. This service is being hosted by a company with their own employees so they are already being paid. Only employees of that organization can be members. This service is to help an organization match its senior employees with their newer employees so they can train them.

Q6: 1. How do you plan on testing performance? 2. How do you plan on making sure the iFrame works in browsers?

A6: Jest for the backend on Node.js, React-testing-library for the frontend. This way we can do unit testing and component testing for our react and node files.

Q7: You mention cost as a constraint. What is the budget for the Pace project?

A7: There is not really a budget, this is why cost is a constraint. Any money that we decide to spend on the project would have to come from us, and not from the client. This means our ability to spend money if any is very limited.

Q8: Will your software include user information modification functions such as changing the password?

A8: We are unsure at this moment. Firebase has a built in authentication service which we have not explored fully its capabilities yet.

Q9: What are some authority that mentor has but mentees doesn't have ? How you guys ensure the security of your program?

A9: The mentor is just a representative of which ever organization is using the service. So there is no difference in privileges. The main difference will be likely in their set up information. Firebase has a built in authentication service. 

Q10: Is it necessary for this to be run on mobile devices? If so, how are you accounting for mobile users?

A10: We are purely a webapp so there will be no mobile support

Q11: What browser will be supported?

A11: This is something we haven't decided yet.

Q12: did the client specifically ask for security to be nonfunctional?

A12: No, but by definition security is a nonfunctional requirement, not a functional one.

Q13: How will the matchmaking functionality be implemented?

A13: Through logical checks on information like time available and area of interest to see what they are interested in.

Q14: Were deliverables split up by the client for you, or did you split functionality into the milestones based on your own intuitions?

A14: By us. We split up the milestone on what we thought were important and what would make sense for a logical order of tasks 

Q15: When it comes with matching the mentor and mentee how are you choosing to match them up what are the logical checks that are being checked? How do you decide what's more important in the match up? Is it just one the mentor can offer to the mentee or do personalities also play a role in matching them up? For continuous integration will your team being using any of the github actions/workflows for automated testing that stops the ability to merge if tests don't pass? How are you choosing if code is okay to merge in? Is it one approval into develop and then everyone to approve before master?

A15: Checks haven't been entirely finalized on what material is being used. But the basic premise is we see if both people are available at the same time. They both are interested in the same areas. The mentor is proficient in the area the mentee is hoping to gain knowledge in. Things of this nature. Yes we plan on using githubs CI. It will likely be only one person approval. We are a group of 3 anyways so in this case most of the group will have seen the code. 

Q16: How are you measuring the non-functional requirements?

A16: We are still working on exact details of our non functional requirements, but those will be slowly addressed overtime with each sprint and client meeting. The nonfunctional requirements will be met when the client is satisfied with them.

Q17: How does Linter compare to other CI software like Github Actions, and why choose Linter for CI over the others?

A17: Linter is a tool alongside for CI. It basically checks syntax and spacing alongside other visual things in our code. Or least that's what is planned for how it is being used. I plan on using Github actions or something similar as well. 

Q18: Since organizations will be able to create an account to view mentors/mentees associated with their organization, will organizations be able to modify the iFrame form to suit their needs?

A18: They should be able to yes. However that is something that will likely be focused on in a later milestone

Q19: How will you ensure the system works in all browsers? How will you test the deployed version of the system?

A19: To test the deployed version jdom allows you to do a mock version of the front end. We aren't doing a simulated backend other than unit testing

Q20: Will an admin has the access to a mentor's profile?

A20: They have to verify the information however this is just a service to match people so other than deleting a mentor. The admin would need to check anything due to the interaction from the mentor being is just submitting a form.

Q21: What exactly does usability mean? Does that mean accessibility options, like variable text size?

A21: Possibly, we have yet to narrow down exact details of what we want for usability, but such things as large visible buttons, intuitive design, and clear/visible text will probably be included.

Q22: How is it possible to maintain both quality/speed/security etc at zero cost? Seems like you guys will have to compromise a bit to stay within budget.

A22: We are using Firebases security and with the free package you have security built alongside some cloud computing capabilities. The biggest thing this would compromise for us is being limited to a small hosting service.

Q23: Why did the client specifically prefer the chosen tech stack?

A23: She had given us a lot of flexibility. She had mentioned firebase multiple times as a database. The frontend and backend were left up to us. We chose to have a javascript framework for both. Presented why, which Node.js and React.js are common so it was approved.

Q24: How will you decide which browsers to support? It is listed as a non-functional requirement, will you be assessing market-share and then choosing something like 98% coverage?

A24: Yes most likely, we have not come to a solid decision of what browsers will be supported, but the most relevant ones such as edge, chrome, and firefox will probably supported.

Q25: Does the user have a profile stored in the database?

A25: Mentees have their form stored but not an actual account. Mentors and admin do however.

Q26: How will you implement the logical checks when matching the mentees to mentors

A26: If/else statements and related logic will probably be used. The major inputs for the matching system are the technologies being taught/learned, and available times. So the matching would mainly focus on correctly aligning both of those.

Q27: Did you need to use a NoSQL database?

A27: No, firebase was recommended. We were given a lot of flexibility however on choice

Q28: how will security be approached when it comes to searching and registration? (for example SQL injection)

A28: Node.js allows you to take the input and put it into a placeholder before actually doing the query so you can check the validity of the input yourself and adjust it if needed.

Q29: Are accounts type strictly bound with the position of the people in the company (e.g. who can have the admin accounts, manager or just an employee)?

A29: We are assuming it is someone who the authority to do so at the organization. We aren't being asked to verify if its a manager.

Q30: How might a user-focused testing procedure be helpful to the client? What are its limitations?

A30: By testing the project how the user sees it, you are forced to interact with the components with what is being deployed which should help you find problems with things that the user interacts with. So if a user is looking for text that "Show message" does in fact show a message your test case would be on a button which has that text as value. Limitations look like the test values are more sensitive to change the ID based testing. This is due to the frequency you change an ID being less than that of the field value. Or at the very least adds a step to avoid that problem.

Q31: Could you explain Iframe a bit more in-depth?

A31: An iframe is an html type that would look similar to how google maps is embedded on a website.

Q32: Will there be any consideration for the security of user data (e.g. encryption, database management, anonymization)? How will this software be deployed (e.g. as a widget for websites, through a web portal, as a mobile app)? Do you have any specific strategies in mind for ensuring a high level of usability in the final app? When indicating storage is a constraint, did the client specify a budget for cloud storage solutions, or was there another factor constraining the amount of data that can be stored?

A32: Firebase allows us to have authentication from a range of sources. Which at this moment have yet to be picked. However google accounts, passwords, facebook and options like that are offered through firebase.

Q33: Why are you considering cloud-based DBs when one of your major constraints is cost? Would the client be willing to move to a self-hosted solution?

A33: Firebase has a small amount of space that is free. We aren't storing much for user profiles so I don't think we will exceed this limit

Q34: Can mentors/mentees complain if they are unhappy with their mentor/mentee?

A34: Not in the base functional requirements. 

Q35: What is your reason to use 3 testing tools? What are their pros and cons?

A35: React Testing library test components and other features that the front end will use. Jest is similar to how Junit is in java so it allows us to coverage testing, unit testing etc for the front and backend. Linter is so each of are consistent on naming and syntax. 

Q36: Will the admin have the ability to remove inappropriate content and users from the web app.

A36: Users won't be communicating with each other on this service and will only find each other. So there should be no way inappropriate content is added

Q37: My one question would be, would mentors/mentee accounts be assigned by an administrative account or software handler, or how will that data be categorized?

A37: Mentor accounts are validated by the admin. Mentees just submit a form that which show mentors with similar results. They pick a mentor. Mentor chooses to accept or not. If they accept they email them to communicate further. 

Q38: You mentioned tools you will use to test, but what kind of testing will you be doing? Integration testing, regression testing, etc?

A38: Integration testing, regression and unit testing.
