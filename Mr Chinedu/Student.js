
const Student ={
        name : "John Doe",
        age: 20,
        grade: "B"
    }

    Student.grade = "A"
    delete Student.age
    
    console.log(Object.keys(Student))
    console.log(Object.values(Student))
