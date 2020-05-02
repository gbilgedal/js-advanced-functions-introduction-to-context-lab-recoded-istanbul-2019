function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
    return {
        firstName: firstName
        , familyName: familyName
        , title: title
        , payPerHour: payPerHour
        , timeInEvents: []
        , timeOutEvents: []
    }
}



function createEmployeeRecords(employees){
  let emplo = [];
  for(let i = 0;i<employees.length;i++){
    emplo.push(createEmployeeRecord(employees[i]));
  }
  return emplo;
}

function createTimeInEvent(employee, dateInfo){
  let date = dateInfo.split(" ");
  let time = date[1];
  let hour = parseInt(time)%100;
  let minutes = parseInt(time)-hour;
  let recordObject = {
    type: "TimeIn",
    hour: parseInt(time),
    date: date[0],
  };

  employee.timeInEvents.push(recordObject);


  return employee;
}

function createTimeInEvent(employee, dateInfo){
  let date = dateInfo.split(" ");
  let time = date[1];
  let hour = parseInt(time)%100;
  let minutes = parseInt(time)-hour;
  let recordObject = {
    type: "TimeOut",
    hour: parseInt(time),
    date: date[0],
  };

  employee.timeInEvents.push(recordObject);


  return employee;
}

function hoursWorkedOnDate(employee, date){
  for (let i = 0; i < obj.timeInEvents.length; i++) {
         if (obj.timeInEvents[i].date == date && obj.timeOutEvents[i].date == date) {
           return (obj.timeOutEvents[i].hour- obj.timeInEvents[i].hour)/100
         }
     }
  
}
