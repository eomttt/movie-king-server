let people = [
    {
        id: '1',
        name: 'person_1',
        age: 11,
        gender: 'male'
    },
    {
        id: '2',
        name: 'person_2',
        age: 15,
        gender: 'female'
    },
    {
        id: '3',
        name: 'person_3',
        age: 18,
        gender: 'female'
    },
    {
        id: '4',
        name: 'person_4',
        age: 21,
        gender: 'male'
    },
    {
        id: '5',
        name: 'person_5',
        age: 55,
        gender: 'female'
    },
    {
        id: '6',
        name: 'person_6',
        age: 22,
        gender: 'male'
    }
];

module.exports.getPeople = () => {
    return people;
}

module.exports.getPerson = (id) => {
    return people.filter((person) => person.id === id)[0];
}

module.exports.addPerson = (name, age, gender) => {
    const newPerson = {
        id: String(people.length + 1),
        name,
        age,
        gender,   
    };

    people.push(newPerson);

    return newPerson;
}

module.exports.deletePerson = (id) => {
    const isIncludePerson = people.map((person) => person.id).includes(id);
    if (isIncludePerson) {
        people = people.filter((person) => {
            return person.id !== id;
        });
        return true;
    }
    return false;
}

module.exports.people = people;