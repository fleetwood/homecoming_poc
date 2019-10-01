const _ = require('underscore')
    , Classtimes = require('./../classes/Classtimes')
    , Instructor = require('./../classes/Instructor')
    , Member = require('./../classes/Member')
    , ScheduledEvent = require('./../classes/ScheduledEvent')
    , Venue = require('./../classes/Venue')
    , Workouts = require('./../classes/Workouts');

      // These are all the available classes variations for Homecoming 2020
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
    ];

// create 40 instructors
const instructors = Instructor.mock(40);
// create 3000 members
const members = Member.mock(3000);

const getMocks = () => {
    let happyMembers, maxHappy, meanHappy, sadMembers;
    /*

    PERFORM EVENT LOGIC HERE

    */
    happyMembers = _.sortBy(members, 'happiness');
    maxHappy = happyMembers[happyMembers.length - 1].happiness;
    members.forEach(m => meanHappy += m.happiness);
    meanHappy = meanHappy / members.length;
    sadMembers = _.filter(members, (m) => m.sad === true);
    sadMembers = sadMembers.length;
    return {
        members,
        happyMembers,
        maxHappy,
        meanHappy,
        sadMembers
    }
};

module.exports = {
    getMocks,
    classes,
    instructors,
    members,
};
