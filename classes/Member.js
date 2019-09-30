const u = require('./../comp/utils');

class Member {
    _id;
    /**
     * A new member.
     * @param name Required.
     * @param workouts Required.
     * @param {Array<String>} times Optional.
     * @param {Array<Instructor>} instructors Optional.
     * @param {Array<ScheduledEvent>} events Optional.
     */
    constructor(name, workouts = [], times = [], instructors = [], events = []) {
        this._id = u.guid();
        this._name= name;
        this._workouts = workouts;
        this._times = times;
        this._events = events;
        this._instructors = instructors;
        this._happiness = 0;
        this.updateHappiness();
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get workouts() {
        return this._workouts;
    }

    get times() {
        return this._times;
    }

    get instructors() {
        return this._instructors;
    }

    get events() {
        return this._events;
    }

    get happiness() {
        return this._happiness;
    }

    updateHappiness() {

    }

    addTime(time) {
        this._times.addIfUnique(time);
        this.updateHappiness();
    }

    removeTime(time) {
        this._times.popIfExists(time);
        this.updateHappiness();
    }

    addEvent(event) {
        this._events.addIfUnique(event,'id');
        this.updateHappiness();
    }

    removeEvent(event) {
        this._events.popIfExists(event,'id');
        this.updateHappiness();
    }
}

module.exports = {
    Member
};