console.log('challenge #3 -- app.js loaded!');

var app = angular.module("appThree", []);
app.controller("infoController", infoController)
app.controller("loanController", loanController)

function infoController(){
  this.name = "Jon Doe"; // default name
  this.height = 5.6; // default height in feet
}

function loanController (){
  this.amount = 1000;
  this.apr = 3.5;
  this.month = function(m){
    var amt = this.amount * Math.pow(Math.pow(Math.E, (m/12)), (this.apr/100))
    console.log(amt)
    return {
      accrued_interest : Math.round((amt - this.amount)*100)/100,
      total_balance : Math.round(amt*100)/100
    }
  }
}
