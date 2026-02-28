const { cart } = require('./checkOut');

beforeEach(() => {
    cart.length = 0;
});

test('cart starts empty', () => {
    expect(cart.length).toBe(0);
});

test('adding product increases cart length', () => {
    cart.push({ name: "garri", quantity: 2, price: 1500.00 });
    expect(cart.length).toBe(1);
});

test('product has correct properties', () => {
    cart.push({ name: "fufu", quantity: 2, price: 1500.00 });
    expect(cart[0].name).toBe("fufu");
    expect(cart[0].quantity).toBe(2);
    expect(cart[0].price).toBe(1500.00);
});

test('removing product by index', () => {
    cart.push({ name: "garri", quantity: 2, price: 1500.00 });
    cart.push({ name: "boole", quantity: 5, price: 25.50 });
    cart.splice(0, 1);
    expect(cart.length).toBe(1);
    expect(cart[0].name).toBe("boole");
});

test('calculate subtotal with multiple items', () => {
    cart.push({ name: "garri", quantity: 2, price: 1500.00 });
    cart.push({ name: "boole", quantity: 5, price: 25.50 });
    let subTotal = 0;
    for (let i = 0; i < cart.length; i++) {
        subTotal += cart[i].quantity * cart[i].price;
    }
    expect(subTotal).toBe(3127.50);
});

test('calculate discount 10%', () => {
    const subTotal = 3000.00;
    const discountPercent = 10;
    const discount = subTotal * discountPercent / 100;
    expect(discount).toBe(300.00);
});

test('calculate VAT 17.5%', () => {
    const subTotal = 3000.00;
    const vat = subTotal * 0.175;
    expect(vat).toBe(525.00);
});

test('calculate bill total', () => {
    const subTotal = 3000.00;
    const discount = 300.00;
    const vat = 472.50;
    const bill = subTotal - discount + vat;
    expect(bill).toBe(3172.50);
});

test('finding product by name', () => {
    cart.push({ name: "garri", quantity: 2, price: 1500.00 });
    cart.push({ name: "boole", quantity: 5, price: 25.50 });
    const index = cart.findIndex(item => item.name === "boole");
    expect(index).toBe(1);
});

test('finding product is case insensitive', () => {
    cart.push({ name: "garri", quantity: 2, price: 1500.00 });
    const index = cart.findIndex(item => item.name.toLowerCase() === "garri".toLowerCase());
    expect(index).toBe(0);
});

test('balance calculation', () => {
    const bill = 1175.00;
    const paid = 1200.00;
    const balance = paid - bill;
    expect(balance).toBe(25.00);
});
   