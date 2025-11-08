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

//Define the interface for the function
// Function declaration that matches the interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

function printTeacher({
  firstName = "Benjamin",
  lastName = "Lamptey",
}: {
  firstName: string;
  lastName: string;
}): string {
  firstName = firstName.charAt(0);
  return `${firstName}. ${lastName}`;
}

const firstName = "Benjamin";
const lastName = "Lamptey";

console.log(printTeacher({ firstName, lastName }));

// 4. writin student class
class StudentClass {
  constructor(public firstName: string, public lastName: string) {}
  workOnHomework(): string {
    return "Currently working";
  }
  displayName(): string {
    return this.lastName;
  }
}

// Example usage:
const student = new StudentClass("Benjamin", "Lamptey");
console.log(student.displayName());
console.log(student.workOnHomework());
