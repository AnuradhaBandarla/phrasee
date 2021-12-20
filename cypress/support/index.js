// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';
// Alternatively you can use CommonJS syntax:
// require('./commands')

// Returns a random integer from 1 to 1000000:                             
Cypress.config('Audience Size in Number', `${Math.floor(Math.random() * 1000000) + 1}`)

// Returns a random integer from 1 to 100:
Cypress.config( 'Avg Open Rate', `${Math.floor(Math.random() * 100) + 1}`)


