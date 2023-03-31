var students = [/*..*/];

for (let i = 0; i < students.length; i++){
    greetStudent(students[i]);
}

// forloop  smile to while loop

for (let student of students) {
    greetStudent(student);
}

//while loop
var students1 = ["Tonny", "joseph", "Joan"];

while (students1.length > 0) {
    let student = students1.pop();
    console.log(`Hello, ${student}`)
}