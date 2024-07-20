// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function(employeesArray) //added employeesArray//
 {
   const employees=[]; //created an empty array to get users input//
   let addingEmployees=true; //created a let with a value for the while loop //
   while (addingEmployees) //while loop//
   {
    const firstName = prompt("Add first name here:"); // for every firstName entry it will promt "Add first name" //
    const lastName = prompt("Add last name here:"); // for every lastName entry will prompt "Add last name"//
    const salary = prompt("Salary here:"); // for every  salary entry will prompt salary here//
    addingEmployee = confirm ("Do you want to add another employee?");  //a flase statement to ask user if they to keep adding another employee//
    // if not the information that input will be store in the variable below //
    const newInfo = {firstName,lastName,salary} //variable that will store first name , last name , salary //

    employees.push(newInfo); // Push method , so that the information that was inpute form employees will be pushed in the varible newInfo//

    //add an empty const to store the user input//
    //use the .push  to store const employees to the empty const//
    //return//
    //console.log//
   }
   return employees; // return to close the variable collect employees//


  // TODO: Get user input to create and return an array of employee objects
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
let total = 0 // for loop
let quanity= employeesArray.length; // to displayaveragesalary of the length that will stored from variable employee and variable 
for (let i=0; i < employeesArray.length; i++){ //loop to display every length of employeesArray and increment
  const employee = employeesArray[i]; // create variable employee to equal the formula above 
  const salary = employee.salary; //merge variable employee to salary
  total += parseFloat(salary) // assignment operator to add equal the total and salary ,used parse Float to convert salary from string to number 

}
console.log(total/quanity); // console log everything in the total variable with arithmetic operator division to display the average salary 
return total/quanity; 

 
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  //merge to line 93 to have it display to cell
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

function trackEmployeeData() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
