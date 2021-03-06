# A WORK IN PROGRESS. MORE TO COME . . .  
### Create project directory
`mkdir [your app name]`

### Configure Typescript
Force JS to be reasonable & strongly typed.  
This is one reason I think you might consider using Golang (or any other strongly typed language you have the warm & fuzzies for). Golang has the ease of JS (simple syntax and even less set up overhead, especially since the advent of go.mod), but is a strongly typed language in and of itself.

### Configure Gulp
Let Gulp build when changes are made so we don't have to think about it, much.

### Configure the App
Register our App as a class with an Express application property (a reference to Express).

Register Morgan middleware to:  
* log server messages  
* parse JSON
* encode URL's

Register express.Router routes

### Configure Express server
Define a port for App.  
Return a server bound to App.
Handle errors.
Set up listening.

### Configure test environment
Add Mocha, Chai, & Chai-HTTP.  
Add ts-node to provide TypeScript interpretation to the Mocha environment. 
Add test script to package.json.  
 NOTE:  
 in test script replace: `--compilers ts:ts-node/register`
 with: `--require ts-node/register`.
 See [Mocha](https://github.com/mochajs/mocha/wiki/compilers-deprecation) for details.

 ### Test routes