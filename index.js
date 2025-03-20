/* Your Code Here */
/* function createEmployeeRecord(arr) {
    return {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    };
}

function createEmployeeRecords(arrays) {
    return arrays.map(createEmployeeRecord);
}

function createTimeInEvent(dateStamp) {
    const [date, hour] = dateStamp.split(' ');
    this.timeInEvents.push({
        type: 'TimeIn',
        hour: parseInt(hour),
        date: date
    });
    return this;
}

function createTimeOutEvent(dateStamp) {
    const [date, hour] = dateStamp.split(' ');
    this.timeOutEvents.push({
        type: 'TimeOut',
        hour: parseInt(hour),
        date: date
    });
    return this;
}

function hoursWorkedOnDate(date) {
    const timeIn = this.timeInEvents.find(e => e.date === date);
    const timeOut = this.timeOutEvents.find(e => e.date === date);
    return (timeOut.hour - timeIn.hour) / 100;
}

function wagesEarnedOnDate(date) {
    const hours = hoursWorkedOnDate.call(this, date);
    return hours * this.payPerHour;
}


function allWagesFor() {
    return this.timeInEvents.reduce((totalWages, timeInEvent) => {
      const date = timeInEvent.date;
      return totalWages + wagesEarnedOnDate.call(this, date); 
    }, 0);
  }
  
function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(employee => employee.firstName === firstName);
}

function calculatePayroll(employeeRecords) {
    return employeeRecords.reduce((totalPayroll, record) => {
        return totalPayroll + allWagesFor.call(record);
    }, 0);
}
 */

// createEmployeeRecord
function createEmployeeRecord(arr) {
    return {
      firstName: arr[0],
      familyName: arr[1],
      title: arr[2],
      payPerHour: arr[3],
      timeInEvents: [],
      timeOutEvents: [],
    };
  }
  
  // createEmployeeRecords
  function createEmployeeRecords(arrays) {
    return arrays.map(arr => createEmployeeRecord(arr));
  }
  
  // createTimeInEvent
  function createTimeInEvent(dateStamp) {
    const [date, hour] = dateStamp.split(' ');
    this.timeInEvents.push({
      type: 'TimeIn',
      hour: parseInt(hour),
      date: date,
    });
    return this;
  }
  
  // createTimeOutEvent
  function createTimeOutEvent(dateStamp) {
    const [date, hour] = dateStamp.split(' ');
    this.timeOutEvents.push({
      type: 'TimeOut',
      hour: parseInt(hour),
      date: date,
    });
    return this;
  }
  
  // hoursWorkedOnDate
  function hoursWorkedOnDate(date) {
    const timeIn = this.timeInEvents.find(e => e.date === date);
    const timeOut = this.timeOutEvents.find(e => e.date === date);
    return (timeOut.hour - timeIn.hour) / 100;
  }
  
  // wagesEarnedOnDate
  function wagesEarnedOnDate(date) {
    const hours = hoursWorkedOnDate.call(this, date);
    return hours * this.payPerHour;
  }
  
  // allWagesFor
  function allWagesFor() {
    return this.timeInEvents.reduce((totalWages, timeInEvent) => {
      const date = timeInEvent.date;
      return totalWages + wagesEarnedOnDate.call(this, date);
    }, 0);
  }
  
  // findEmployeeByFirstName
  function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(employee => employee.firstName === firstName);
  }
  
  // calculatePayroll
  function calculatePayroll(employeeRecords) {
    return employeeRecords.reduce((totalPayroll, record) => totalPayroll + allWagesFor.call(record), 0);
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

