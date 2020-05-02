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

function createTimeInEvent(employee, date){
  date = date.split(" ");
  let time = date[1];
  let hour = Integer.parseInt(time)%100;
  let minutes = Integer.parseInt(time)-hour;
let recordObject = {
  type: "TimeIn",
  hour: date[1],
  date: date[0],
};
  //console.log(recordObject);
  employee.timeInEvents.push(recordObject);
  

  return employee;
}
