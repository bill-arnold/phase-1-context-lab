/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

// const allWagesFor = function () {
//     const eligibleDates = this.timeInEvents.map(function (e) {
//         return e.date
//     })

//     const payable = eligibleDates.reduce(function (memo, d) {
//         return memo + wagesEarnedOnDate.call(this, d)
//     }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

//     return payable
// }
// Define the required functions

// Record structure for an employee
function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
    // Initialize and return an employee record object
    // with the provided information and empty timeInEvents and timeOutEvents arrays
    return {
      firstName,
      familyName,
      title,
      payPerHour,
      timeInEvents: [],
      timeOutEvents: [],
    };
  }
  
  // Convert an array of arrays into an array of employee records
  function createEmployeeRecords(arrays) {
    // Map each array in the input to an employee record using createEmployeeRecord
    // Return the resulting array of employee records
    return arrays.map(createEmployeeRecord);
  }
  
  // Add a timeIn event to an employee's record and return the updated record
  function createTimeInEvent(dateStamp) {
    // Extract date and hour from the dateStamp
    // Add a TimeIn event object to the timeInEvents array
    // Return the updated employee record
    const [date, hour] = dateStamp.split(" ");
    this.timeInEvents.push({ type: "TimeIn", hour: parseInt(hour), date });
    return this;
  }
  
  // Add a timeOut event to an employee's record and return the updated record
  function createTimeOutEvent(dateStamp) {
    // Extract date and hour from the dateStamp
    // Add a TimeOut event object to the timeOutEvents array
    // Return the updated employee record
    const [date, hour] = dateStamp.split(" ");
    this.timeOutEvents.push({ type: "TimeOut", hour: parseInt(hour), date });
    return this;
  }
  
  // Calculate the hours worked on a specific date for an employee
  function hoursWorkedOnDate(date) {
    // Find the matching TimeIn and TimeOut events for the given date
    // Calculate the hours worked and return the result
    const timeIn = this.timeInEvents.find((event) => event.date === date);
    const timeOut = this.timeOutEvents.find((event) => event.date === date);
  
    if (timeIn && timeOut) {
      return (timeOut.hour - timeIn.hour) / 100; // Convert hours from 24-hour format
    }
  
    return 0;
  }
  
  // Calculate the wages earned on a specific date for an employee
  function wagesEarnedOnDate(date) {
    // Use hoursWorkedOnDate to calculate the hours worked
    // Multiply the hours by the employee's payPerHour to get the wages
    // Return the calculated wages
    const hoursWorked = hoursWorkedOnDate.call(this, date);
    return hoursWorked * this.payPerHour;
  }
  
  // Export the functions for testing
  module.exports = {
    createEmployeeRecord,
    createEmployeeRecords,
    createTimeInEvent,
    createTimeOutEvent,
    hoursWorkedOnDate,
    wagesEarnedOnDate,
    allWagesFor,
  };
  
