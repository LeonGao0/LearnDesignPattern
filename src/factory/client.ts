// Factory Use Case Example Code

import ChairFactory from './ChairFactory';

const CHAIR = ChairFactory.getChair('BigChair');
console.log(CHAIR.getDimensions());
