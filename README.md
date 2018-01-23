## NPM Scripts 

npm run start = Creates a new dev server on http://localhost:4200/ and also verifies lint. </br>
npm run build = Creates the production files. It creates a new folder named dist. </br>
npm run test  = Executes all the test cases. 


## Known issues. (Research)

1. This project was made on angular-cli 1.6.5 and modified certain folders and files.
   There is a bug that it doesn't shows the sourcemaps for sass files (it might be needed to use
   ng-eject and modify the webpack file to use a different plugin for sass).
   
   https://github.com/angular/angular-cli/issues/9099


2. There is no official support for pug on angular-cli but there is a workaround 
  
  https://github.com/angular/angular-cli/issues/1886

  Credits to:
  https://medium.com/@MarkPieszak/using-pug-or-jade-templates-with-the-angular-cli-9e37334db5bc


