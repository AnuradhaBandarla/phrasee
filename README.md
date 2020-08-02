# QA Automated Tests for V8 
Mocha - An automated test framework powered by [Cypress](https://www.cypress.io/)

## Prerequisites

Make sure you have SSH keys set up on your environment + Github account ([guide](https://help.github.com/en/articles/adding-a-new-ssh-key-to-your-github-account)). We recommend using [VSCode](https://code.visualstudio.com/) for developing tests as it provides a fully integrated environment. This README assumes you are using VSCode.

Below are the depedenicies added to the project:

[testing-library/cypres](https://testing-library.com/docs/dom-testing-library/api-queries)  is family of packages which helps you test UI components in a user-centric way. Please enure you:

- [Have the testing-library installed](https://testing-library.com/docs/dom-testing-library/install)

[Prettier](https://prettier.io) helps you to format the code. This makes reviewing tests a much smoother process. Please ensure you:

- [Have the Prettier extension installed](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Have 'Format on save' turned on in your editor.](https://code.visualstudio.com/docs/editor/codebasics#_formatting)

## Installation

You must have the below installed in your machine prior to Cypress installation

- Node [How to install Node.js](https://confluence.prod.pur3.net/display/CYP/How+to+install+Node.js)
- Visual studio code editor [How to install Visual studio code editor](https://confluence.prod.pur3.net/display/CYP/How+to+install+Visual+Studio+Code+editor)
- Gitbash (Windows) or Git (Mac)

Cypress is installed on the root of the project. Before do that, make sure to have Gitbash installed and the URL to clone the project.

Gitbash is available at: https://git-scm.com/downloads

**Clone repository:**
- Open folder where project is to be cloned
- Enter: git clone  https://github.com/[your_user_name]/v8_cypress
- For more detals on cloning an existing repository [follow this link](https://confluence.prod.pur3.net/display/CYP/Clone+existing+project+from+git+and+install+Cypress)

**Install cypress:**
- Open project on root folder using gitbash
- Enter (install cypress): npm install 
- For more details on Cypress installatio [follow this link](https://confluence.prod.pur3.net/display/CYP/Clone+existing+project+from+git+and+install+Cypress)


**Launch cypress:**
- Open project on root folder using gitbash
- Enter: npm start
