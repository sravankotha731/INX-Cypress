## Description

INXchange QA Automation repository.

# Introduction

In this project we are using Cypress with TypeScript ,BDD/Cucumber

## Prerequisites

**Before you begin, ensure you have met the following requirements:**

```javascript
Node.js (v18 or higher)

npm (v8 or higher) or Yarn 1.22
```

## Clone the repo

Clone the repo using below url

https://github.com/Informa-Markets/inxchange-qa-automation.git

## Set-up

Once git clone is success run `npm install`

Install Cypress with Typescript and Cucumber

```javascript
Install Cypress : - npm install cypress@10 --save-dev

install typescript: - npm install typescript --save-dev

Execute cypress : - npx cypress open & observe you can see .ts example and required files

Install cucumber : - npm install @badeball/cypress-cucumber-preprocessor_

Install cypress browserify : - npm install @cypress/browserify-preprocessor_
```

## Update tsconfig.json file

Create tsconfig.json file in the root folder :

```javascript
Add below lines in tsconfig.json file
{
"compilerOptions": {
"esModuleInterop": true,
"target": "es5",
"lib": [
"es5",
"dom"
],
"types": [
"cypress",
"node"
],
"paths": {
"@badeball/cypress-cucumber-preprocessor/_": [
"./node_modules/@badeball/cypress-cucumber-preprocessor/dist/subpath-entrypoints/_"
]
}
},
"include": [
"**/*.ts"
]
}
```
