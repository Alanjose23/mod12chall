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

let whatto = () => {
inquirer.prompt([{
  type:'list',
  name: 'wwyd',
  message: 'What to do?',
  choices: ['view all departments','view all roles', 'view all employees']
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



})}