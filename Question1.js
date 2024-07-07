function getStudentGrade() {
    let marks = prompt("Enter student marks from 0 to 100");

    // Converting it into a number
    marks = Number(marks);

    //the grades on the marks
    let grade;
    if (marks > 79) {
        grade = 'A';
    } else if (marks >= 60 && marks <= 79) {
        grade = 'B';
    } else if (marks >= 50 && marks <= 59) {
        grade = 'C';
    } else if (marks >= 40 && marks <= 49) {
        grade = 'D';
    } else {
        grade = 'E';
    }

    // This is the output grade
    console.log(grade);
}

// Here we are calling the function to execute it
getStudentGrade();