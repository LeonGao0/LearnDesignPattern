interface IProduct {
    name: string;
}

abstract class Product implements IProduct {
    public name: string;
    constructor(name: string) {
        this.name = name;
    }
}

class ConcreteProductA extends Product {
    constructor(name: string) {
        super(name);
        console.log(`construct concreateProductA`);
    }
}

class ConcreteProductB extends Product {
    constructor(name: string) {
        super(name);
        console.log(`construct concreateProductB`);
    }
}

class ConcreteProductC extends Product {
    constructor(name: string) {
        super(name);
        console.log(`construct concreateProductC`);
    }
}

class Factory {
    static Creator(someProperty: string): IProduct {
        if (someProperty == 'a') {
            return new ConcreteProductA('produncA');
        } else if (someProperty == 'b') {
            return new ConcreteProductB('produncB');
        } else {
            return new ConcreteProductC('produncC');
        }
    }
}

const PRODUCT = Factory.Creator('a');
console.log(PRODUCT.name);
