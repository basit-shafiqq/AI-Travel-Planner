export const OptionList = [
    {
        id: 1,
        title: "Solo",
        desc: "A sole traveler exploring",
        icon: '🧳',  
        count: 1,  // Numeric count for Solo
    },
    {
        id: 2,
        title: "Duo",
        desc: "A duo adventure awaits",
        icon: '👫',  
        count: 2,  // Numeric count for Duo
    },
    {
        id: 3,
        title: "Family",
        desc: "Family time on the go",
        icon: '👨‍👩‍👧‍👦',  
        count: 4,  // Numeric count for Family
    },
    {
        id: 4,
        title: "Friends",
        desc: "Travel with your friends",
        icon: '👯‍♂️',  
        count: 3,  // Numeric count for Friends
    },
];

export const prompt = 'Generate a travel plan for the location: {location} for {totalDays} day and {totalNights} night for {traveler} with a {budget} budget with flight details, geo coordinates, ratings, description and places to visit nearby, place details, place image url, ticket pricing, travel time for each location for {totalDays} days with each day plan with best time to visit in JSON format.';