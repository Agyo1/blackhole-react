let gConstant = 6.6743 * Math.pow(10, -11);
let c = 3 * Math.pow(10, 8);

export class SchwarzschildBlackHole {
    constructor(mass) {
        this.mass = mass;
    }

    getMass() {
        return this.mass;
    }
    setMass(mass) {
        this.mass = mass;
    }

    calcSchwarzschildRadius() {
        return (2 * gConstant * this.mass) / Math.pow(c, 2);
    }
    calcISCO() {
        return this.roundScientificNumber(
            3 * this.calcSchwarzschildRadius(),
            2
        );
    }
    calcArea() {
        return 4 * Math.PI * Math.pow(this.calcSchwarzchildRadius(), 2);
    }

    distanceToObject(x, y, z) {
        return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));
    }
    roundScientificNumber(number, precision) {
        const roundedNumber = Number(number.toExponential(precision));
        return roundedNumber;
    }
}
