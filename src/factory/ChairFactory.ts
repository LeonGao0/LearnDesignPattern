import Chair from './chair';

export default class ChairFactory {
    static getChair(chair: string) {
        if (chair == 'BigChair') {
            return new BigChair();
        } else {
            return new SmallChiar();
        }
    }
}

class BigChair extends Chair {
    constructor() {
        super();
        this.height = 60;
        this.width = 60;
        this.depth = 60;
    }
}

class SmallChiar extends Chair {
    constructor() {
        super();
        this.height = 40;
        this.width = 40;
        this.depth = 40;
    }
}
