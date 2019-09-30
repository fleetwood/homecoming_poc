const _ = require('./../comp/utils');

class Instructor {
    /**
     * @param {Guid} guid
     * @param {String} name
     * @param {String} avatar
     * @param {Array<Workout>} workouts
     */
    constructor(name, workouts = []) {
        const descriptions = [
                'Fun and happy'
                , 'Will work you to the bone!'
                , 'Inspirational instructor will lift you up'
                , 'Energetic instructor who makes you work!'
                , 'Get ready to sweat.'
                , 'Engaging and upbeat, but tough.'
            ]
            , avatars = ['01','02','03','04','05','06','07','08','09'];
        this._guid = _.guid();
        this._name = name;
        this._avatar = avatars.random();
        this._description = descriptions.random();
        this._workouts = workouts;
    }

    get guid() {
        return this._guid;
    }

    get name() {
        return this._name;
    }

    get avatar() {
        return this._avatar;
    }

    get description() {
        return this._description;
    }

    get workouts() {
        return this._workouts;
    }
}

module.exports = Instructor;
