const input = require('prompt-sync')();

let cart = [];

function validateQuantity() {
    let quantity = 0;
    while (quantity <= 0) {
        let quantityInput = input("Quantity: ");
        quantity = parseInt(quantityInput);
        if (isNaN(quantity) || quantity <= 0) {
            console.log("Please enter a valid quantity (positive number)!");
            quantity = 0;
        }
    }
    return quantity;
}

function validatePrice() {
    let price = 0;
    while (price <= 0) {
        let priceInput = input("Price per unit: ");
        price = parseFloat(priceInput);
        if (isNaN(price) || price <= 0) {
            console.log("Please enter a valid price (positive number)!");
            price = 0;
        }
    }
    return price;
}

function addProduct(product) {
    let quantity = validateQuantity();
    let price = validatePrice();
    cart.push({ name: product, quantity: quantity, price: price });
    console.log("Item added to cart!");
}

function removeItem() {
    let product = input("Item name to remove: ");
    let productName = product.trim();

    if (productName === "") {
        console.log("Item name cannot be empty!");
        return;
    }

    let index = -1;
    for (let count = 0; count < cart.length; count++) {
        if (cart[count].name.toLowerCase() === productName.toLowerCase()) {
            index = count;
            break;
        }
    }

    if (index !== -1) {
        cart.splice(index, 1);
        console.log("Item removed.");
    } else {
        console.log("Item not found.");
    }
}

function checkout(customerName) {
    let cashier = "";
    while (cashier.trim() === "") {
        cashier = input("Cashier name: ");
        if (cashier.trim() === "") {
            console.log("Cashier name cannot be empty!");
        }
    }

    let discountPercent = -1;
    while (discountPercent < 0 || discountPercent > 100) {
        let discountInput = input("Discount (%): ");
        discountPercent = parseFloat(discountInput);
        if (isNaN(discountPercent) || discountPercent < 0 || discountPercent > 100) {
            console.log("Please enter a valid discount (0-100)!");
            discountPercent = -1;
        }
    }

    let subTotal = 0;
    for (let count = 0; count < cart.length; count++) {
        subTotal += cart[count].quantity * cart[count].price;
    }
    let discount = subTotal * discountPercent / 100;
    let vat = subTotal * 0.175;
    let bill = subTotal - discount + vat;

    
    printReceipt(customerName, cashier, subTotal, discount, vat, bill, 0, false);
    console.log("\nTHIS IS NOT YOUR RECEIPT. KINDLY PAY: " + bill.toFixed(2));
    let paid = 0;
    while (paid < bill) {
        let paidInput = input("Amount paid: ");
        paid = parseFloat(paidInput);
        if (isNaN(paid) || paid < bill) {
            console.log("Insufficient amount! Bill is: " + bill.toFixed(2));
            paid = 0;
        }
    }

    printReceipt(customerName, cashier, subTotal, discount, vat, bill, paid, true);
}

function printReceipt(customerName, cashier, subTotal, discount, vat, bill, paid, finalReceipt) {
    const date = new Date();
    const formattedDate = date.toLocaleString('en-GB', {
        day: '2-digit', month: 'short', year: '2-digit',
        hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true
    });

    console.log("\nSEMICOLON STORES");
    console.log("Date: " + formattedDate);
    console.log("Cashier: " + cashier);
    console.log("Customer: " + customerName);
    console.log("-----------------------------------------------");
    
    process.stdout.write("ITEM           ");
    process.stdout.write("QTY  ");
    process.stdout.write("PRICE   ");
    process.stdout.write("TOTAL     ");
    process.stdout.write("\n");

    for (let index = 0; index < cart.length; index++) {
        let total = cart[index].quantity * cart[index].price;
        let itemName = cart[index].name.toString();
        let itemQty = cart[index].quantity.toString();
        let itemPrice = cart[index].price.toFixed(2);
        let itemTotal = total.toFixed(2);
        
        while (itemName.length < 15) itemName += " ";
        while (itemQty.length < 5) itemQty += " ";
        while (itemPrice.length < 8) itemPrice += " ";
        while (itemTotal.length < 10) itemTotal += " ";
        
        process.stdout.write(itemName);
        process.stdout.write(itemQty);
        process.stdout.write(itemPrice);
        process.stdout.write(itemTotal);
        process.stdout.write("\n");
    }

    console.log("-----------------------------------------------");
    console.log("SubTotal: " + subTotal.toFixed(2));
    console.log("Discount: " + discount.toFixed(2));
    console.log("VAT: " + vat.toFixed(2));
    console.log("Bill Total: " + bill.toFixed(2));

    if (finalReceipt) {
        console.log("Amount Paid: " + paid.toFixed(2));
        console.log("Balance: " + (paid - bill).toFixed(2));
        console.log("THANK YOU FOR YOUR PATRONAGE");
    }
}

function main() {
    console.log("\n----------WELCOME TO SEMICOLON STORE----------- ");

    let customerName = "";
    while (customerName.trim() === "") {
        customerName = input("Enter customer name: ");
        if (customerName.trim() === "") {
            console.log("Customer name cannot be empty!");
        }
    }

    console.log("Type END to finish or REMOVE to delete item");

    while (true) {
        let product = input("Product name: ");
        if (product.toLowerCase().trim() === "end")
            break;
        if (product.toLowerCase().trim() === "remove") {
            removeItem();
            continue;
        }
        if (product.trim() === "") {
            console.log("Product name cannot be empty!");
            continue;
        }
        addProduct(product);
    }

    if (cart.length === 0) {
        console.log("No items in cart.");
        process.exit();
    }
    checkout(customerName);
}

if (require.main === module) {
    main();
}

module.exports = { addProduct, removeItem, checkout, printReceipt, cart };