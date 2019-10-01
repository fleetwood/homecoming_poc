const u = require('./../comp/utils')
    , _ = u._
    , Workouts = require('./Workouts')
    , Instructor = require('./Instructor')
    , Classtimes = require('./Classtimes')
    , names = [
        'Chanice Caldwell',
        'Tulisa Dickinson',
        'Marley Walls',
        'Fatima Lyon',
        'Ikrah Philip',
        'Brayden Eaton',
        'Blade Weeks',
        'Nabilah Walton',
        'Usaamah Odonnell',
        'Sidrah Tomlinson',
        'Jaydn Rahman',
        'Joann Stuart',
        'Dina Chang',
        'Branden Ray',
        'Iqra Allen',
        'Yunus Lord',
        'Junayd Meza',
        'Jameson Cain',
        'Jamaal Benjamin',
        'Vivek Abbott',
        'Evalyn Travers',
        'Amy-Leigh Strickland',
        'Jett Heaton',
        'Tilly Matthews',
        'Johnathon Gregory',
        'Rio Roberts',
        'Ryley Lugo',
        'Halle Traynor',
        'Daniyal Cullen',
        'Harvey-Lee Kemp',
        'Magdalena Tucker',
        'Ciaran Escobar',
        'Julien Clifford',
        'Tyrone Kinney',
        'Abu Bull',
        'Edie Buckner',
        'Joshua Wright',
        'Keelan Vance',
        'Aaryan Ryan',
        'Fiona Stevenson',
        'Jenna Cortes',
        'Milana Hough',
        'Shani Vo',
        'Chenai Allan',
        'Aliesha Le',
        'Adaline Preston',
        'Shanna Tate',
        'Shelby Leon',
        'Chay Hill',
        'Cora Bray',
        'Hakim Herring',
        'Lylah Noble',
        'Lennie Swan',
        'Nelly Fischer',
        'Jimmy Mueller',
        'Dawud Reynolds',
        'Will Ross',
        'Ayesha Levy',
        'Aayush Almond',
        'Vivienne Rooney',
        'Adeeb Henson',
        'Menachem North',
        'Aasiyah Zuniga',
        'Naima Wiggins',
        'Isla-Rae Livingston',
        'Albert Salt',
        'Amaya Petty',
        'Salahuddin Fountain',
        'Greyson Clay',
        'Shakira Mcmillan',
        'Ishaq Mansell',
        'Sameeha Rigby',
        'Shea Mahoney',
        'Fabian Dickerson',
        'Mared Stott',
        'Nicolas Hendricks',
        'Kobe Glenn',
        'Kory Correa',
        'Kaycee Cope',
        'Keisha Gomez',
        'Kynan Sharples',
        'Abdurahman Lake',
        'Karl Yoder',
        'Kobi Spears',
        'Gerald Mccall',
        'Martyn Mcmanus',
        'Fateh Golden',
        'Vladimir Magana',
        'Charley Webb',
        'Sasha Garner',
        'Blanche Portillo',
        'Kaia Velez',
        'Jared Whitney',
        'Jadene Paul',
        'Perry Greer',
        'Blossom Wise',
        'Amin Rios',
        'Blanka Houghton',
        'Rian Howarth',
        'Kashif Woodley'
    ];

class Member {
    /**
     * A new member.
     * @param name Required.
     * @param {Array<String>} workouts Optional.
     * @param {Array<String>} times Optional.
     * @param {Array<Instructor>} instructors Optional.
     * @param {Array<ScheduledEvent>} events Optional.
     */
    constructor(name, workouts = [], times = [], instructors = [], events = []) {
        this._id = u.guid();
        this._name = name;
        this._preferredWorkouts = workouts;
        this._preferredTimes = times;
        this._preferredInstructors = instructors;
        this._events = events;
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get preferredWorkouts() {
        return this._preferredWorkouts;
    }

    get preferredTimes() {
        return this._preferredTimes;
    }

    get preferredInstructors() {
        return this._preferredInstructors;
    }

    get events() {
        return this._events;
    }

    get happiness() {
        if (this.events.length<1) {
            return 0;
        }
        const points = {
            instructors: 3,
            times: 2,
            workouts: 1
        };
        let pi = _.select(this.events,(i) => {
            return _.contains(this.preferredInstructors, i.instructors);
        }).length;
        let pt = _.select(this.events, (e) => {
            return _.contains(this.preferredTimes, e);
        }).length;
        let pw = _.select(this.events, (e) => {
            return _.contains(this.preferredWorkouts, e);
        }).length;
        return (pi*points.instructors)+(pt*points.times)+(pt*points.workouts);
    }

    get sad() {
        return this.happiness === 0;
    }

    addTime(time) {
        this._preferredTimes.addIfUnique(time);
    }

    removeTime(time) {
        this._preferredTimes.popIfExists(time);
    }

    addEvent(event) {
        this._events.addIfUnique(event, 'id');
    }

    removeEvent(event) {
        this._events.popIfExists(event, 'id');
    }

    static mock(limit = 1) {
        const create = () => {
            const tLimit = u.rand(1, 6) // up to 6 preferred times
                , wLimit = u.rand(1, 3) // up to 3 preferred workout types
                , iLimit = u.rand(1, 6); // up to 6 preferred instructors

            // get random preferences
            const workouts = Workouts.random(wLimit)
                , times = Classtimes.random(tLimit)
                , instructors = [].mock(iLimit, Instructor.mock);
            return new Member(names.random(), workouts, times, instructors);
        }
        return limit === 1 ? create() : [].mock(limit, create);
    }
}

module.exports = Member;
