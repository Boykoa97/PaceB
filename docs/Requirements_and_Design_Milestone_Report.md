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
* **Security** is one of the most important requirements, as we must be able to guarantee our client’s company and its users’ data are well protected against attacks.
* **Usability** is important, as we want our client and its users to be able to navigate the web app quickly and easily.
* **Reliability**, as lots of tests must be ran to minimize critical failures.
* **Performance**, as the web app must be able to create user accounts, submit forms to appropriate companies, connecting mentors to mentees quickly and efficiently.

## Constraints
* **Cost** is a top constraint, as we may have to sacrifice having the best possible product, due to a limited budget.
* **Browsers** that are supported by our web app, as well as devices compatible, are also major constraints.
* **Storage**, which determines how much data from the web app can be stored.
* **Deadline** for the final product is also a constraint, as more time may be needed to incorporate features that could help create the best product.

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

**Node.js**:
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

**Firebase**:
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
