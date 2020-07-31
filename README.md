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
