"use strict";
class Product {
    constructor(name) {
        this.name = name;
    }
}
class ConcreteProductA extends Product {
    constructor(name) {
        super(name);
        console.log(`construct concreateProductA`);
    }
}
class ConcreteProductB extends Product {
    constructor(name) {
        super(name);
        console.log(`construct concreateProductB`);
    }
}
class ConcreteProductC extends Product {
    constructor(name) {
        super(name);
        console.log(`construct concreateProductC`);
    }
}
class Factory {
    static Creator(someProperty) {
        if (someProperty == 'a') {
            return new ConcreteProductA('produncA');
        }
        else if (someProperty == 'b') {
            return new ConcreteProductB('produncB');
        }
        else {
            return new ConcreteProductC('produncC');
        }
    }
}
const PRODUCT = Factory.Creator('a');
console.log(PRODUCT.name);
