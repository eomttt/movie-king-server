const { getPeople, getPerson, addPerson, deletePerson } = require('../dummy/people');
const { getMovies, getMovie } = require('../controller/test-movie.controller');
const { getRegion, getTheaterInfo, getTimeTable, getBoxOffice } = require('../controller/movie.controller');

const resolvers = {
	Query: {
		people: () => getPeople(),
		person: (_parent, { id }) => getPerson(id),
		testMovies: (_parent, { limit, rating }) => getMovies(limit, rating),
		testMovie: (_parent, { id }) => getMovie(id),
		region: (_parent, { type }) => getRegion(type),
		theaterInfo:(_parent, { type, regionIndex }) => getTheaterInfo(type, regionIndex),
		timeTable: (_parent, { type, theaterLink }) => getTimeTable(type, theaterLink),
		boxOffice: () => getBoxOffice(),
	},
	Mutation: {
		addPerson: (_parent, { name, age, gender }) => addPerson(name, age, gender),
		deletePerson: (_parent, { id }) => deletePerson(id)
	}
}

module.exports.resolvers = resolvers;