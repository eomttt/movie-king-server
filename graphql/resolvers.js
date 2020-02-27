const { getPeople, getPerson, addPerson, deletePerson } = require('../dummy/people');
const { getMovies, getMovie } = require('../controller/test-movie.controller');

const resolvers = {
    Query: {
        people: () => getPeople(),
        person: (_parent, { id }) => getPerson(id),
        movies: (_parent, { limit, rating }) => getMovies(limit, rating),
        movie: (_parent, { id }) => getMovie(id),
    },
    Mutation: {
        addPerson: (_parent, { name, age, gender }) => addPerson(name, age, gender),
        deletePerson: (_parent, { id }) => deletePerson(id)
    }
}

module.exports.resolvers = resolvers;