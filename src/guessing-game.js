class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.minvalue = min;
        this.maxvalue = max;
    }

    guess() {
        let current = Math.ceil((this.minvalue + this.maxvalue)/2);
        this.currentvalue = current;
        return current;
    }

    lower() {
        this.maxvalue = this.currentvalue;
            }

    greater() {
        this.minvalue = this.currentvalue;
    }
}

module.exports = GuessingGame;
