const { findExpensiveProduct, checkQQuantityOfInventory, printTotalItems, bankAccount, getDetails, student } = require('./createObjectClass');

describe('Student Object', () => {
    test('student should have correct name', () => {
        expect(student.name).toBe('John Doe');
    });

    test('student should have updated age', () => {
        expect(student.age).toBe(23);
    });

    test('student should have GPA property', () => {
        expect(student.GPA).toBe(3.8);
    });

    test('getDetails should return correct string', () => {
        const result = getDetails(student);
        expect(result).toBe('John Doe is 23 years old and has a GPA of 3.8');
    });
});

describe('Bank Account', () => {
    beforeEach(() => {
        bankAccount.balance = 500;
    });

    test('should deposit amount correctly', () => {
        bankAccount.deposit(200);
        expect(bankAccount.balance).toBe(700);
    });

    test('should withdraw amount correctly', () => {
        bankAccount.withdraw(100);
        expect(bankAccount.balance).toBe(400);
    });

    test('should have correct owner', () => {
        expect(bankAccount.owner).toBe('Alice');
    });
});

describe('Inventory', () => {
    test('printTotalItems should return total of all items', () => {
        const total = printTotalItems({ apple: 10, banana: 5, orange: 8, mango: 12 });
        expect(total).toBe(35);
    });
});

describe('Products', () => {
    test('findExpensiveProduct should return products above threshold', () => {
        const products = [
            { id: 1, name: 'Laptop', price: 1200 },
            { id: 2, name: 'Phone', price: 800 },
            { id: 3, name: 'Tablet', price: 500 }
        ];
        const result = findExpensiveProduct(products, 700);
        expect(result).toEqual(['Laptop', 'Phone']);
    });

    test('findExpensiveProduct should return empty array when no products exceed threshold', () => {
        const products = [{ id: 1, name: 'Tablet', price: 500 }];
        const result = findExpensiveProduct(products, 700);
        expect(result).toEqual([]);
    });
});