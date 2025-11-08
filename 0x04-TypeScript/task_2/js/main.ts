//Advanced types Part 1
//Creating interfaces for Director and Teacher
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }
  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }
  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

//Teacher class implementation
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }
  getCoffeeBreak(): string {
    return "Cannot have a break";
  }
  workTeacherTasks(): string {
    return "Getting to work";
  }
}

//Creating a factory function
type salary = number | string;
function createEmployee(salary: salary): Director | Teacher {
  if (salary > "500" || (typeof salary === "number" && salary > 500)) {
    return new Teacher();
  } else {
    return new Director();
  }
}

//6. Type predicate function
export function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

//Testing the createEmployee function
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee("$500"));

//Creating functions specific to employees
//function executeWork
function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

//Testing executeWork function
console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));

//7. String literal types
// and the Subjects interface

type Subjects = "Math" | "History";
function teachClass(todayClass: Subjects): string {
  if ((todayClass = "Math")) {
    return "Teaching Math";
  } else if ((todayClass = "History")) {
    return "Teaching History";
  }
}

// Testing teachClass function
console.log(teachClass("Math"));
console.log(teachClass("History"));
