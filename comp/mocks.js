const utils = require('./utils')
    , Guid = require('./../classes/Guid')
    , Venue = require('./../classes/Venue')
    , Workouts = require('./../classes/Workouts')
    , Classtimes = require('./../classes/Classtimes')
    , Instructor = require('./../classes/Instructor')
    , ScheduledEvent = require('./../classes/ScheduledEvent');

const classes = [
        new ScheduledEvent(Classtimes.FRIAM, 40, Venue.STUDIO, Workouts.BIKE),
        new ScheduledEvent(Classtimes.FRIPM, 40, Venue.STUDIO, Workouts.BIKE),
        new ScheduledEvent(Classtimes.FRIAM, 25, Venue.FLEX, Workouts.BIKE),
        new ScheduledEvent(Classtimes.FRIPM, 25, Venue.FLEX, Workouts.BIKE),
        new ScheduledEvent(Classtimes.FRIAM, 20, Venue.STUDIO, Workouts.TREAD),
        new ScheduledEvent(Classtimes.FRIPM, 20, Venue.STUDIO, Workouts.TREAD),
        new ScheduledEvent(Classtimes.FRIAM, 20, Venue.STUDIO, Workouts.YOGA),
        new ScheduledEvent(Classtimes.FRIPM, 20, Venue.STUDIO, Workouts.YOGA),
        new ScheduledEvent(Classtimes.FRIPM, 200, Venue.LARGE, Workouts.OPEN),

        new ScheduledEvent(Classtimes.SATAM, 40, Venue.STUDIO, Workouts.BIKE),
        new ScheduledEvent(Classtimes.SATPM, 40, Venue.STUDIO, Workouts.BIKE),
        new ScheduledEvent(Classtimes.SATAM, 25, Venue.FLEX, Workouts.BIKE),
        new ScheduledEvent(Classtimes.SATPM, 25, Venue.FLEX, Workouts.BIKE),
        new ScheduledEvent(Classtimes.SATAM, 20, Venue.STUDIO, Workouts.TREAD),
        new ScheduledEvent(Classtimes.SATPM, 20, Venue.STUDIO, Workouts.TREAD),
        new ScheduledEvent(Classtimes.SATAM, 20, Venue.STUDIO, Workouts.YOGA),
        new ScheduledEvent(Classtimes.SATPM, 20, Venue.STUDIO, Workouts.YOGA),
        new ScheduledEvent(Classtimes.SATPM, 200, Venue.LARGE, Workouts.OPEN),

        new ScheduledEvent(Classtimes.SUNAM, 40, Venue.STUDIO, Workouts.BIKE),
        new ScheduledEvent(Classtimes.SUNPM, 40, Venue.STUDIO, Workouts.BIKE),
        new ScheduledEvent(Classtimes.SUNAM, 25, Venue.FLEX, Workouts.BIKE),
        new ScheduledEvent(Classtimes.SUNPM, 25, Venue.FLEX, Workouts.BIKE),
        new ScheduledEvent(Classtimes.SUNAM, 20, Venue.STUDIO, Workouts.TREAD),
        new ScheduledEvent(Classtimes.SUNPM, 20, Venue.STUDIO, Workouts.TREAD),
        new ScheduledEvent(Classtimes.SUNAM, 20, Venue.STUDIO, Workouts.YOGA),
        new ScheduledEvent(Classtimes.SUNPM, 20, Venue.STUDIO, Workouts.YOGA),
        new ScheduledEvent(Classtimes.SATPM, 200, Venue.LARGE, Workouts.OPEN)
    ]
    , instructors = [
        'Ally',
        'Alex',
        'Christine',
        'Cody',
        'Emma',
        'Hannah',
        'Jenn',
        'Jess',
        'Instructor #12',
        'Instructor #13',
        'Denis',
        'Olivia',
        'Matt',
        'Robin',
        'Ben',
        'Leanne'
    ].map(n => new Instructor(n, []))
    , icons = ['pe-7s-gym', 'fa fa-heartbeat', 'pe-7s-bicycle', 'fa fa-headphones', 'fa fa-fire']
    , tag_flavor = ['Hour', 'Challenge', 'Max', 'Rush', 'Grind', 'Gear']
    , names = {
        members: [
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
        ]
    }
    , success = {
        BAD: 'danger',
        GOOD: 'success',
        MEDIUM: 'warning',
        ANY: 'primary'
    };

/**
 * create 3000 members
 */
const randomMember = () => {
    const times = utils.rand(1,6)
        , wouts = utils.rand(1,3);
    const workouts = Workouts.random(wouts);
};
const members = [].mock(3000, randomMember);

/**
 * Associate each object to its references
 */

const statistics = [
    {
        title: 'Events',
        description: 'Number of total events',
        value: classes.length,
        success: success.GOOD
    },
    {
        title: 'Members',
        description: 'Number of members assigned',
        value: `${members.length} of 3000`,
        success: success.ANY
    },
    {
        title: 'Passes',
        description: 'Number of iterations to algorithm',
        value: 1,
        success: success.ANY
    },
    {
        title: 'Rating',
        description: 'Percentage of members with at least one preference scheduled',
        value: '70%',
        perc: 70,
        success: success.MEDIUM
    }
];

console.log('w00t')

module.exports = {
    events: classes,
    instructors,
    members,
    statistics,
    times: []
};
