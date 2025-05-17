# react_dev
jshint filename.js //scans the code for error reasons

semantic versioning or sem var
express : "5.3.4"  
express : "^5.3.4"  carrat character says you are intrested in any version of 5 //5.x
express : "~5.3.4" tilde character are intrested in patch versions //5.3.x
5-major   will change the existing functionality
3-minor   adding new features without effecting existing functionality
4-patch   the will fix the bugs

dependency: Packages your app needs to run in production (e.g., express, react).
devDependency:Packages only needed for development (e.g., testing tools, linters like jshint, nodemon).npm install --save-dev jshint
npm install --production (in production) installs only "dependencies".
npm install (or just npm i), all dependencies listed in both "dependencies" and "devDependencies" in your package.json are installed by default.

//npm init creates pacakge.json
//npm init --yes creates package.json with default values