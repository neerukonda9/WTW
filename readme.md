## Willis Towers Watson Automation Framework 


### Installation Guide

#### How to clone the Git repo
```
Step 1 - Open Github 

Step 2 - clone the repo   

Pre-requisite
OS: Mac

Install below written libraries from here : https://nodejs.org/download/release/v8.12.0/

Note : When you install node it comes with npm !

npm 6.4.0
node 8.12.0 

Open Terminal and check if machine has installed : npm -v

If not, then run the following to install node version 8 (steps taken from (https://medium.com/@katopz/how-to-install-specific-nodejs-version-c6e1cec8aa11): 
 brew search node 
 brew unlink node
 brew install node@8
 brew link node@8


and then run:
 sudo chown -R $(whoami) $(brew --prefix)/*
 brew link --overwrite node@8 --force

```

Once installed perform the below written steps.

```
# To run your test locally, you'll need a local selenium server running, you can install and launch a selenium standalone server with chrome, firefox and phantomjs drivers via the following commands in a separate terminal:

sudo npm install selenium-standalone@latest -g --save-dev
sudo selenium-standalone install
```

then cd into the project folder and run
```
npm i
```


#### Usage

```bash

Structure: 

Examples - npm script :

npm run dev    

Example - command line : 


node_modules/.bin/wdio test/config/dev.conf.js --suites homePage // will run only login suite which has been defined in xxx.conf.js file

```
#### Video Recording can be found in the project
//WTW-Test/TestRecordedVideo.mov

