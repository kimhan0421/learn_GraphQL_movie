const lily = {
    name: "Lily",
    age: 22,
    gender: "female"
}

const resolvers = {
    Query: {
        person: () => lily
    }
}

export default resolvers