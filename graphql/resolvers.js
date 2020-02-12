const people = [
    {
        id: "1",
        name: "Nicolas",
        age: 18,
        gender: "female"
    },
    {
        id: "2",
        name: "JUN",
        age: 25,
        gender: "male"
    },
    {
        id: "3",
        name: "SO",
        age: 11,
        gender: "female"
    },
    {
        id: "4",
        name: "TWO",
        age: 67,
        gender: "male"
    },
    {
        id: "5",
        name: "Malia",
        age: 55,
        gender: "female"
    },
    {
        id: "6",
        name: "Tendong",
        age: 90,
        gender: "male"
    }
];


const resolvers = {
    Query: {
        people: () => people,
    }
};

export default resolvers;