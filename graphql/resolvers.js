import { getPeople, getPerson, addPerson, deletePerson } from '../dummy/people';

const resolvers = {
    Query: {
        people: () => getPeople(),
        person: (_, { id }) => getPerson(id)
    },
    Mutation: {
        addPerson: (_, { name, age, gender }) => addPerson(name, age, gender),
        deletePerson: (_, { id }) => deletePerson(id)
    }
}

export default resolvers;