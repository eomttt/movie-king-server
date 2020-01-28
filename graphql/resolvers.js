import people, { getPerson } from '../dummy/people';

const resolvers = {
    Query: {
        people:() => people,
        person: (_, { id }) => getPerson(id)
    }
}

export default resolvers;