# Steps to setup cypress automation project

1. **\*\***This is a guide to follow, if you want to start your own cypress project from scratch (meaning, not cloning an existing project from any github repositories)**\*\*\***

Below are the 6 steps will shall be looking into:

Install Node
Setup Node Home in environmental variables
Create a folder for your cypress project
Install visual studio code editor
Generate package.json file
Install cypress
(tick)Note: Before installing Node, please check if you have Node installed already by following the below steps:

Run any one of the below commands in any of your terminal

         node --version

         node -v

         If you have Node installed, your terminal will return the Node version installed.
         1.If you do not have Node installed, follow the below steps to install (if you have node.js installed already, please ignore this process.)

Download Node.js from https://nodejs.org/en/download/ and complete the Node.js installation( its very simple to install Node.js, you need to complete few clicks of 'Next' and you will be done)

Nodejs will install in program files(unless specified otherwise). From there, copy the home path of node.js and navigate to system environmental properties

- Set Node Home in environmental variables

Now in your machine go to system properties and follow the below path to set up Node Home in environmental variable :

System properties → Environmental Variables → System variables → New → New system Variable
Now for Variable name/Variable value , type in NODE_HOME/home path of node.js respectively
Now click OK

- Create a folder for your cypress project,in which you will be creating your automation test cases

Ex: C:\CYPRESSAUTOMATION

2. Now it's time to download cypress and its dependencies into your project folder

For this we need to generate package.json file, where we will mention the list of software or dependencies to be downloaded by node.
Now, in visual studio code, open the terminal- type npm init and hit enter→ (this will auto generate package.json file for us)

It will ask us to enter the below meta data, which you can simply skip by hitting enter:

                       package name, version, description, entrypoint, test command, git repository, keywords, author, license, Is this OK? YES

Now, package.json file is now created under your CYPRESSAUTOMATION folder,

3. To write our code we need visual studio code editor(generally prefered editor to write any javascript code). Let's download using the below link(if you already have it downloaded please ignore)

https://code.visualstudio.com/download

Follow the below steps to pull our project folder 'CYPRESSAUTOMATION' , into vs code editor.

Now open VS code → File→ Open folder → C:\CYPRESSAUTOMATION(or your path of the project folder) → SelectFolder

The folder CYPRESSAUTOMATION, is now pulled into vscode editor

4. Install cypress

Now, to install cypress as project dependency, open the project folder as created in the above step 3 (which is the root for cypress to be installed),open the terminal in vs code and type "npm install cypress --save-dev" and hit enter. This will install Cypress locally as a dev dependency for your project. In 5 minutes, cypress will be installed

5. To open test runner, below command should be run in the command prompt terminal:
   node_modules\.bin\cypress open
   ie: you want to hit node_modules from .bin folder and open the cypress tool
   all the executable .exe files of cypress are located in .bin folder of node_modules
   Please make sure to add node_modules to the gitignore file while creating a git repository to avoid duplication for every commit

6. Please refer command.js file for all the re-usable code
7. Please refer to index.js file for math function which runs every time before each spec file is run and new random value is generated
8. I have implemented page object model using inbuilt mocha framework, which cypress official website recommends to use and is as per the industry standards. Code is in readable format and simple to understand even by a novice. Easy enough to train any in house person from business team as well to maintain the code base.
9. To run tests in test runner, enter the command npm start in the command line terminal
10. To run tests in headless mode, Open project on root folder using gitbash in vs code
    Type in npm run headless and hit enter

---

11. How is cypress unique in its architecture?
    Cypress engine runs inside the browser directly, meaning which the the browser will run your test code.
    Cypress will modify your browser behaviour by - 1. manipulating the DOM elements and 2. altering the network requests and responses on the fly

Cypress automatically waits for commands and assertions to complete, before moving on with the tests
Cypress takes the snapshots of every command run. Just hover on the command in the Command Log, to see what happened in each step
Cypress is built on Node.js, packaged as npm module
As it is built on Node.js, Cypress uses javascript for writing tests, however, 90% of the tests can be written using inbuilt cypress commands, which are easy to understand

---

12. Cypress requires a framework, so that it can structure its tests, to automate our web application

(red star)As we will be writing our code in javascript, we need to follow the standards of at least one javascript testing framework. There are different JavaScript test frameworks like mocha and jasmine. Cypress by default bundles in mocha framework as cypress library while we download cypress.

describe block - is our test suite (all our tests cases are wrapped in describe block)

it block - is our test case (each it block is one test)

Everything that is mentioned under it block is treated as a 'test' in cypress.
An it block can contain one or many steps.
Its optimal to have more tests, with minimum steps in it, rather than having one lengthy test(star)
(lightbulb)Let's remember it in a easy way : Describe your test suite with optimum test cases wrapped under it (big grin)

---

**_ Test run evidence: Please refer to Anu-Phrasee\cypress\videos\ for the videos of the test runs in the headless mode _**

# phrasee-Test-Rep
