Steps to setup cypress automation project

1.Create a folder –
mkdir smokeSuite
2.navigate to the above created folder –
cd smokeSuite
3.now create a package.json file by running the below command in vscode editor-
npm i -init
keep pressing enter for all the options
at last say yes
package.json file is now created for the project
4.Now open the folder created by selecting the path
Ex C:\Users\anuradha.bandarla\smokeSuite
5.Now install cypress as a dependency for the project
npm install cypress –save-dev
once installed, you can see a new entry created in the devDependencies as below stating the cypress version installed
Some one to access this project – download this project and simply enter the command npm install
in vscode editor
it will scan package.json and finds the dependency "cypress": "^5.0.0", downloads the cypress software of version 5.0.0 or what ever the version is mentioned
6.To open test runner, below command should be run in the command prompt terminal:
node_modules\.bin\cypress open
ie: you want to hit node_modules from .bin folder and open the cypress tool
all the executable .exe files of cypress are located in .bin folder of node_modules
Please make sure to add node_modules to the gitignore file while creating a git repository to avoid duplication for every commit
# phrasee-Test-Rep
