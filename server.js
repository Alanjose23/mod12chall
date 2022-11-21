const express = require('express');
// Import and require mysql2
const consoletable = require('console.table');
const inquirer = require('inquirer');
require('dotenv').config();
const mysql = require('mysql2');

const PORT = process.env.PORT || 3005;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
// view all departments, view all roles, 
// view all employees, add a department, add a role, add an employee, and update an employee role
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: process.env.DB_USER,
    // TODO: Add MySQL password here
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  console.log(`Connected to the CMS_db database.`)
);

// Create a movie

// Default response for any other request (Not Found)
db.connect(function (error) {
  if(error){
    console.log('error found')
  }
  else {
  whatto()}})

  let alldep = () =>{
    inquirer.prompt([{
      type: 'list',
      name: 'vad',
      message: 'Would you like to view all departments?',
      choices: ['yes','no']
    }]).then((data) => {
      if(data.vad === 'yes') {
        db.query('SELECT * FROM Department', function (error,results)  {
          if(error) {
            console.log('error, please try again')
          }
          else if (results) {
            console.table(results);
          }
        })
      }
    }
  
    )
  }
  let allrole = () =>{
    inquirer.prompt([{
      type: 'list',
      name: 'vad',
      message: 'Would you like to view all roles?',
      choices: ['yes','no']
    }]).then((data) => {
      if(data.vad === 'yes') {
        db.query('SELECT * FROM Role', function (error,results)  {
          if(error) {
            console.log('error, please try again')
          }
          else if (results) {
            console.table(results);
          }
        })
      }
    }
  
    )
  }
  let alleng = () =>{
    inquirer.prompt([{
      type: 'list',
      name: 'vad',
      message: 'Would you like to view all Employees?',
      choices: ['yes','no']
    }]).then((data) => {
      if(data.vad === 'yes') {
        db.query('SELECT * FROM Employee', function (error,results)  {
          if(error) {
            console.log('error, please try again')
          }
          else if (results) {
            console.table(results);
          }
        })
      }
    }
  
    )
  }
  let addemp = () => {
    inquirer.prompt([{
      type: 'input',
      name: 'vad',
      message: 'What is the name of your department?',
    }]).then((data) => {
    
    db.query('INSERT INTO Department (name) VALUES (?)', data.vad,(error, 
    results) => {
       if (error) return res.json({ error: error });
       else {
        console.table(results);
       }
  })
})}
let addw = () => {
  inquirer.prompt([{
    type: 'input',
    name: 'vad',
    message: 'What Role would you like to add?',
  },
  {
    type: 'input',
    name: 'vad2',
    message: 'What is the salary?',
  },
  {
    type: 'input',
    name: 'vad3',
    message: 'What is the department id?',
  }
]).then((data) => {
  
  db.query('INSERT INTO Role (title,salary,department_id) VALUES (?,?,?)', [data.vad,data.vad2,data.vad3],(error, 
  results) => {
     if (error) return res.json({ error: error });
     else {
      console.table(results);
     }
})
})}

let adde = () => {
  inquirer.prompt([{
    type: 'input',
    name: 'vad',
    message: 'What is the first name?',
  },
  {
    type: 'input',
    name: 'vad2',
    message: 'What is the last name?',
  },
  {
    type: 'input',
    name: 'vad3',
    message: 'What is the role id?',
  },
  {
    type: 'input',
    name: 'vad4',
    message: 'What is the manager id?',
  }
]).then((data) => {
  
  db.query('INSERT INTO Employee (first_name,last_name,role_id,manager_id) VALUES (?,?,?,?)', [data.vad,data.vad2,data.vad3,data.vad4],(error, 
  results) => {
     if (error) return res.json({ error: error });
     else {
      console.table(results);
     }
})
})}

let whatto = () => {
inquirer.prompt([{
  type:'list',
  name: 'wwyd',
  message: 'What to do?',
  choices: ['view all departments','view all roles', 'view all employees','add a role', 'add a department', 'add an employee']
}]).then((data) =>{
  if(data.wwyd === 'view all departments'){
    alldep()
  }
  else if(data.wwyd === 'view all roles'){
    allrole()

  }
  else if(data.wwyd === 'view all employees'){
    alleng()
  }
  else if(data.wwyd === 'add a department') {
    addemp()}
  else if(data.wwyd === 'add a role') {
      addw()
  }
  else if(data.wwyd === 'add an employee') {
    adde()
}
})}