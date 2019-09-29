const utils = require('./utils');
const times = [
            { id: utils.guid(), order:0, label: "Fri AM" },
            { id: utils.guid(), order:1, label: "Fri PM" },
            { id: utils.guid(), order:2, label: "Sat AM" },
            { id: utils.guid(), order:3, label: "Sat PM" },
            { id: utils.guid(), order:4, label: "Sun AM" },
            { id: utils.guid(), order:5, label: "Sun PM" }
        ]
    , tags = ['Power', 'Yoga', 'Distance', 'Beginner', 'Pro']
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
        ],
        instructors: [
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
        ]
    }
    , descriptions = [
          'Fun and happy'
        , 'Will work you to the bone!'
        , 'Inspirational instructor will lift you up'
        , 'Energetic instructor who makes you work!'
        , 'Get ready to sweat.'
        , 'Engaging and upbeat, but tough.'
    ]
    , avatars = ['01','02','03','04','05','06','07','08','09']
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
    const slots = utils.rand(1,3)
    return {
        id: utils.guid(),
        name: names.members.random(),
        type: tags.random(),
        times: times.random(slots)
    };
}
const members = [].mock(3000, randomMember);

/**
 * create 70 events with random capacities
 */
const randomEvent = () => {
    const tag = tags.random()
        , capacity = [10,20,30,40,200].random()
        , limit = utils.rand(10, capacity)
        , icon = icons[tags.indexOf(tag)];
    return {
        id: utils.guid(),
        name: `${tag} ${tag_flavor.random()}`,
        time: times.random(),
        type: tag,
        icon,
        capacity: capacity,
        members: [],
        instructor: {}
    };
}
const randomInstructor = () => {
    return {
        id: utils.guid(),
        name: names.instructors.random(),
        description: descriptions.random(),
        events: [],
        image: avatars.random()+'.png'
    };
}
const instructors = names.instructors.map(i => {
    return {
        id: utils.guid(),
        name: i,
        description: descriptions.random(),
        events: [],
        image: avatars.random()+'.png'
    }
});

/**
 * Associate each object to its references
 */

const statistics = [
    {
        title: 'Events',
        description: 'Number of total events',
        value: events.length,
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

module.exports = {
    events,
    instructors,
    members,
    statistics,
    times,
    randomEvent,
    randomInstructor,
    randomMember
}