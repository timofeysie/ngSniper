# ngSniper

A ngPerformance demo app that shows the number of scopes, watches and digest cycels, etc. 
It also is based on the demo created by the author of ngPerformance, Scott Tate.



## Build & development

Run `grunt` for building.  If you have errors try 'grunt --force'.
Run `grunt serve` to preview the app with live reload.

## Testing

Running `grunt test` will run the unit tests with karma.

## History
This project was generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.11.1.

Original Notes from the PDDemo

You'll need all the same things installed that you need to run a Yeoman Angular scaffold: node, grunt, grunt cli, etc.
npm install -g grunt-cli bower yo generator-karma generator-angular

From there, once inside the directory, run grunt serve and it should open the web server and open the browser.  I have it set to allow any IP address,
so you'll get a page cannot be found when you first open it.  Just change 0.0.0.0 in the URL to localhost.  Or, in the gruntfile.js, just change
line 71 back to localhost instead of 0.0.0.0.  Using the latter allows you to open the web server from other computers.

4) The Demo page is the page where you can comment and un-comment code.  I've included the Checkout page as well, but I'm using that for my course,
so it's not really demo-worthy.  If you open it in a browser, beware -> it can crash the browser as it is the 'before' state of the performance
remediation process.  For the befor and after (or more details), watch my Pluralsight course in 30-45 days! :)

By Scott Tate