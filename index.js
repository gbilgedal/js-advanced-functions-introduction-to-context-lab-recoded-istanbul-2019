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


}
