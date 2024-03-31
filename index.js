// Assigning an employee variable to an object using literal syntax
const employee = {
  name: "Tim Baros",
  streetAddress: "1230 Mombasa Road",
  age: "25",
  position: "Developer"
};


function updateEmployeeWithKeyAndValue(employee, key, value) {
  return {
      ...employee,
      [key]: value
  };
}
const updatedEmployee = updateEmployeeWithKeyAndValue(employee, 'streetAddress', '456 Manyanja Road');


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = { ...employee }; // Create a copy of the employee object
  delete newEmployee[key]; // Delete the property with the specified key from the copy
  return newEmployee; // Return the modified copy
}
// const deletedvalue = deleteFromEmployeeByKey(employee, 'age');
delete employee.age;




function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}
console.log(updateEmployeeWithKeyAndValue(employee));

