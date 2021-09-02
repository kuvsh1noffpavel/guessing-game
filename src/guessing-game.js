class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.minValue = min;
        this.maxValue = max;
    }

    guess() {
        return Math.round((this.maxValue + this.minValue)/2);
    }

    lower() {
        this.maxValue = this.guess();
    }

    greater() {
        this.minValue = this.guess();
    }
}

module.exports = GuessingGame;
