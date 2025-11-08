interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

const teacher3: Teacher = {
  firstName: "John",
  fullTimeEmployee: false,
  lastName: "Doe",
  location: "London",
  contract: false,
};

console.log(teacher3);

interface Director extends Teacher {
  numberOfReports: number;
}

const director1: Director = {
  firstName: "Benjamin",
  lastName: "Lamptey",
  fullTimeEmployee: true,
  location: "Accra",
  numberOfReports: 5,
  contract: true, // still allowed from Teacher’s index signature
};

console.log(director1);

// Define the interface for the function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Function declaration that matches the interface
function printTeacher(firstName: string, lastName: string): string {
  return `${firstName.charAt(0)}. ${lastName}`;
}

// Assign the function to a variable of type printTeacherFunction (optional)
const teacherPrinter: printTeacherFunction = printTeacher;

console.log(printTeacher("Benjamin", "Lamptey")); // Output: B. Lamptey

//interface for class
interface StudentClass {
  workOnHomework(): string;
  displayName(): string;
}
// interface for constructor
interface StudentContructor {
  new (firstName: String, lastName: string): StudentClass;
}

// Class that implements the StudentClass interface
class Student implements StudentClass {
  constructor(public firstName: string, public lastName: string) {}
  workOnHomework(): string {
    return "Currently working";
  }
  displayName(): string {
    return this.firstName;
  }
}

// Example usage:
const student = new Student("Benjamin", "Lamptey");
console.log(student.displayName());
console.log(student.workOnHomework());
