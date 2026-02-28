// Question 1:
const student = {
    name: "John Doe",
    age: 22,
    courses:["Math", "Physics", "Computer Science"],
    address:{
        city: "New York",
        zip: "10001"
    }
}

console.log(student.name);
console.log(student.courses[1]);
console.log(student.address.zip);

student.age = 23;
student.GPA = 3.8

function getDetails(student){
    return `${student.name} is ${student.age} years old and has a GPA of ${student.GPA}`;
}

console.log(getDetails(student));   

// Question 2:
const bankAccount = {
    owner: "Alice",
    balance: 500,
    deposit(amount){
        this.balance += amount;
    },
    withdraw(amount){
        if(amount <= 0){
            console.log("Invalid amount");
        }
        else if(amount > this.balance){
            console.log("Insufficient funds");
        }  
        else{
            this.balance -= amount;
        }
    },
}

 console.log(bankAccount.balance);
    bankAccount.deposit(200);
    console.log(bankAccount.balance);
    bankAccount.withdraw(100);
    console.log(bankAccount.balance);


// Question 3:

const inventory = {
    apple: 10,
    banana: 5,
    orange: 8,
    mango: 12
};

function checkQQuantityOfInventory(item){
    for(let key in item){
        console.log(`${key}: ${item[key]}`);
    }

}
console.log(checkQQuantityOfInventory(inventory));

function printTotalItems(inventory){
    let totalItems = 0;
    for(let key in inventory){
        totalItems += inventory[key];
    }
    return totalItems;
}

console.log(printTotalItems(inventory));


// Question 4:
const company = {
    name: "TechCorp",
    location: "San Francisco",
    employees: [
        {id: 1, name: "Alice", department: "Engineering"},
        {id: 2, name: "Bob", department: "Marketing"},
        {id: 3, name: "Charlie", department: "HR"}
    ]
}

console.log(company.employees[1]);

    const {name, location} = company;
    console.log(name);
    console.log(location);

    for(let employee of company.employees){
        console.log(employee.name);
    }

// Question 5:
    const products = [
        {id: 1, name: "Laptop", price: 1200},
        {id: 2, name: "Phone", price: 800},
        {id: 3, name: "Tablet", price: 500},
        {id: 4, name: "Desktop", price: 700}
    ];

    let threshold = 700;
    const findExpensiveProduct = (products, threshold) => {
        let expensiveProducts = [];
        for(let product of products){
            if(product.price > threshold){
                expensiveProducts.push(product.name);
            }
        }
        return expensiveProducts;
    }

    console.log(findExpensiveProduct(products, threshold));

    module.exports = { findExpensiveProduct, checkQQuantityOfInventory, printTotalItems, bankAccount, getDetails, student };