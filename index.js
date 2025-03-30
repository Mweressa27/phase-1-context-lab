/* Your Code Here */
function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
  return {
    firstName: firstName,
    familyName: familyName,
    title: title,
    payPerHour: payPerHour,
    timeInEvents: [],
    timeOutEvents: []
  };
}

function createEmployeeRecords(arr) {
  return arr.map(createEmployeeRecord);
}

function createTimeInEvent(dateTime) {
  let [date, hour] = dateTime.split(" ");
  this.timeInEvents.push({
    type: "TimeIn",
    date: date,
    hour: parseInt(hour, 10)
  });
  return this;
}

function createTimeOutEvent(dateTime) {
  let [date, hour] = dateTime.split(" ");
  this.timeOutEvents.push({
    type: "TimeOut",
    date: date,
    hour: parseInt(hour, 10)
  });
  return this;
}

function hoursWorkedOnDate(date) {
  let timeInEvent = this.timeInEvents.find(event => event.date === date);
  let timeOutEvent = this.timeOutEvents.find(event => event.date === date);
  return (timeOutEvent.hour - timeInEvent.hour) / 100;
}

function wagesEarnedOnDate(date) {
  return hoursWorkedOnDate.call(this, date) * this.payPerHour;
}

function findEmployeeByFirstName(srcArray, firstName) {
  return srcArray.find(employee => employee.firstName === firstName);
}

function calculatePayroll(records) {
  return records.reduce((total, record) => total + allWagesFor.call(record), 0);
}






/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

 const allWagesFor = function () {
  const eligibleDates = this.timeInEvents.map(function (e) {
      return e.date
  })

  const payable = eligibleDates.reduce(function (memo, d) {
      return memo + wagesEarnedOnDate.call(this, d)
  }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

  return payable
}
