const u = require('./../comp/utils');

class Workouts {
    static get BIKE() { return 'Cycle'; }
    static get TREAD() { return 'Tread'; }
    static get YOGA() { return 'Yoga'; }
    static get OPEN() { return 'Open'; }
    static random(num = 1) {
        return [Workouts.BIKE, Workouts.YOGA, Workouts.TREAD].random(num);
    }
}

module.exports = Workouts;
