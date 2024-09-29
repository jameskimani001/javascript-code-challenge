// Function to determine the grade based on marks
function getGrade(marks) {
    if (marks >= 80 && marks <= 100) {
        return 'A';
    } else if (marks >= 60 && marks < 80) {
        return 'B';
    } else if (marks >= 49 && marks < 60) {
        return 'C';
    } else if (marks >= 40 && marks < 49) {
        return 'D';
    } else if (marks < 40 && marks >= 0) {
        return 'E';
    } else {
        return 'Invalid marks';
    }
}

// Prompt user for input
let userInput =100;
let marks = parseInt(userInput);

// Validate input and display the grade
if (!isNaN(marks) && marks >= 0 && marks <= 100) {
    let grade = getGrade(marks);
    ("The grade is: " + grade);
} else {
    ("Please enter a valid number between 0 and 100.");
}
