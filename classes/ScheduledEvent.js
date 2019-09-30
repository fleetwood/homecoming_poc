const Guid = require('./Guid');

class ScheduledEvent {
    /**
     * @param {String} time
     * @param {Number} capacity
     * @param {String} venue
     * @param {String} workout
     * @param {Array<Instructor>} instructors
     * @param {Array<Member>} members
     */
    constructor(time, capacity, venue, workout, instructors = [], members = []) {
        this._guid = new Guid();
        this._capacity = capacity;
        this._venue = venue;
        this._workout = workout;
        this._instructors = instructors;
        this._members = members;
    }

    get guid() {
        return this._guid;
    }

    get capacity() {
        return this._capacity;
    }

    get venue() {
        return this._venue;
    }

    get workout() {
        return this._workout;
    }

    get instructors() {
        return this._instructors;
    }

    get members() {
        return this._members;
    }

    addMember(member) {

    }
}

module.exports = ScheduledEvent;
