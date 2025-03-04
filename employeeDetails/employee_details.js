const employees = [
  { id: 1, name: 'John Doe', age: 30, department: 'IT', specialization: 'JavaScript', salary: 50000 },
  { id: 2, name: 'Alice Smith', age: 28, department: 'HR', specialization: 'Python', salary: 45000 },
  { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', specialization: 'Java', salary: 60000 },
  { id: 4, name: 'Mark Markov', age: 29, department: 'IT', specialization: 'JavaScript', salary: 55000},
  //... Здесь можно добавить больше записей сотрудников
];

function displayEmployees() {
    // Функция для отображения всех сотрудников
  const totalEmployees = employees.map((employee) => `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
  document.getElementById('employeesDetails').innerHTML = totalEmployees;
};

function calculateTotalSalaries() {
  const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
  document.getElementById('employeesDetails').innerHTML = `<p>Общая зарплата: $${totalSalaries}</p>`;
};

function displayHREmployees() {
  const hrEmployees = employees.filter(employee => employee.department === 'IT');
  const hrEmployeesDisplay = hrEmployees.map((employee) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
  document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
};

function findEmployeeById(employeeId) {
  const foundEmployee = employees.find(employee => employee.id === employeeId);
  if (foundEmployee) {
  document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
  }
  else{
    document.getElementById('employeesDetails').innerHTML = 'сотрудник с таким ID не найден';

  }
};

function displayEmployeesSpecialization() {
	const employeesSpecialization = employees.filter(employee => employee.specialization === 'JavaScript');
  const employeesSpecializationDisplay = employeesSpecialization.map((employee) => `<p>${employee.name} - ${employee.department} - ${employee.specialization}</p>`).join('');
  document.getElementById('employeesDetails').innerHTML = employeesSpecializationDisplay;
}