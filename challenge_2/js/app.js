console.log('challenge #2 -- app.js loaded!');

var app = angular.module("appTwo", []);
app.controller("WelcomeController", WelcomeController);
app.controller("WDIController", WDIController);

function WelcomeController(){
  this.full_name = "Ryan Johnson";
  this.age = 33;
  this.city = 'Sacramento';
  this.state = 'California';
  this.shout = function(str){
    return str.toUpperCase() + '!';
  }
}

function WDIController () {
  this.class_name = "WDI 34";
  this.enrolled_students = "Shiv, Amber, Mike, Ryan, RJ, AA-Ron, LD, Ricardo, Greice, and Alex";
  this.start_date = 'November 28, 2016';
  this.end_date = 'March 3, 2017';
  this.daysRemaining = function(date){
    return Math.ceil((Date.parse(date) - Date.now())/86400000);
  }
}
