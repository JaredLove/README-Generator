// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require ("fs");
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
  
  {
      type: 'input',
      name: 'name',
      message: 'Whats is your name? (Required)',
      validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter your name!');
            return false;
          }
        }

  },
      
  {
          type: 'input',
          name: 'github',
          message: 'Whats is your GitHub Useranme? (Required)',
          validate: githubInput => {
              if (githubInput) {
                return true;
              } else {
                console.log('Please enter your GitHub Username!');
                return false;
              }
            }
  
  },
      
  {
              type: 'input',
              name: 'ptitle',
              message: 'Whats is your Project Title? (Required)',
              validate: ptitleInput => {
                  if (ptitleInput) {
                    return true;
                  } else {
                    console.log('Please enter your Project Title!');
                    return false;
                  }
                }
      
  },
         
  {
                  type: 'input',
                  name: 'description',
                  message: 'Description of project? (Required)',
                  validate: desInput => {
                      if (desInput) {
                        return true;
                      } else {
                        console.log('Please enter a description!');
                        return false;
                      }
                    }
          
  },

  {
                      type: 'input',
                      name: 'installation',
                      message: 'If any, please note any steps to install your project (Not Required)',
                     
                    
  },

  {
                      type: 'input',
                      name: 'tests',
                      message: 'If any, please note a test sample of your code to show how to run it (Not Required)'
                      
  },
             
  {
                      type: 'input',
                      name: 'license',
                      message: 'Please input a license for your project! If unsure please vist https://choosealicense.com/ (Required)',
                      validate: licInput => {
                          if (licInput) {
                            return true;
                          } else {
                            console.log('Please enter a License!');
                            return false;
                          }
                        }
              
  },
                  
  {
                          type: 'input',
                          name: 'usage',
                          message: 'Whats is the usage of your project? (Required)',
                          validate: usageInput => {
                              if (usageInput) {
                                return true;
                              } else {
                                console.log('Please enter the usage of your project!');
                                return false;
                              }
                            }
                  
  },
                     
  {
                              type: 'input',
                              name: 'credits',
                              message: 'List your collaborators, if any, with links to their GitHub profiles, if none than just your name. (Required)',
                              validate: credInput => {
                                  if (credInput) {
                                    return true;
                                  } else {
                                    console.log('Please enter your collaborators!');
                                    return false;
                                  }
                                }
                      
  },

{
                                  type: 'input',
                                  name: 'contribute',
                                  message: 'If you would like to inculde any notes for how people can contribute to this project note them here. (Not Required)'
}


];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    if (err) {
      return console.log(err);
    }

    console.log("README.md is done!")
  });
}


const writeFile = (writeToFile);


    

// TODO: Create a function to initialize app
async function initialize() {
  try {
  const input = await inquirer.prompt(questions);

  const markDown = generateMarkdown(input);
  console.log(markDown);

  await writeFile('README.md', markDown);
  }catch (error) {
    console.log(error);
  }
};

initialize();