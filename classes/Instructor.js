const _ = require('./../comp/utils')
    , Workouts = require('./Workouts')
    , names = [
        'Ally',
        'Alex',
        'Christine',
        'Cody',
        'Emma',
        'Hannah',
        'Jenn',
        'Jess',
        '#12',
        '#13',
        'Denis',
        'Olivia',
        'Matt',
        'Robin',
        'Ben',
        'Leanne'
    ]
;

class Instructor {
    /**
     * @param {String} name
     * @param {Array<Workout>} workouts
     */
    constructor(name, workouts = []) {
        this._guid = _.guid();
        this._name = name;
        this._workouts = workouts;
    }

    get guid() {
        return this._guid;
    }

    get name() {
        return this._name;
    }

    get workouts() {
        return this._workouts;
    }

    static mock(limit = 1) {
        const create = () => {
            // up to 3 workout types
            const limit = _.rand(1,3)
            return new Instructor(names.random(), Workouts.random(limit));
        }
        return limit === 1 ? create() : [].mock(limit, create);
    }
}

module.exports = Instructor;
