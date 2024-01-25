let me = {
  firstName: 'Jesse',
  lastName: 'Kercheval',
  id: 1,
};

let friend = {
  firstName: 'Jack',
  lastName: 'Lovell',
  id: 2,
};

let mother = {
  firstName: 'Judi',
  lastName: 'Atkins',
  id: 3,
};

let personIdCount = 1;

let people = {
  collection: [me, friend, mother],
  fullName(person) {
    console.log(person.firstName + ' ' + person.lastName);
  },
  
  fullNameAndId(person) {
    console.log(person.id + ': ' + person.firstName + ' ' + person.lastName);
  },
  
  rollCall() {
    this.collection.forEach(this.fullNameAndId);
  },

  add(person) {
    if (this.isInvalidPerson(person)) {
      console.log(`${person} invalid!`);
      return;
    }

    this.collection.push(person);
    person.id = personIdCount;
    personIdCount += 1;
  },

  getIndex(person) {
    let index = -1;
    this.collection.forEach((comparator, i) => {
      if (comparator.firstName === person.firstName &&
        comparator.lastName === person.lastName) {
          index = i;
      }
    });

    return index;
  },

  isInvalidPerson(person) {
    return typeof person.firstName !== 'string' && typeof person.lastName !== 'string';
  },

  get(person) {
    if (this.isInvalidPerson(person)) {
      return;
    }

    return this.collection[this.getIndex(person)];
  },

  update(person) {
    if (this.isInvalidPerson(person)) {
      return;
    }

    let existingPersonId = this.getIndex(person);
    if (existingPersonId === -1) {
      this.add(person);
    } else {
      this.collection[existingPersonId] = person;
    }
  },

  remove(person) {
    let index;
    if (this.isInvalidPerson(person)) {
      return;
    };

    index = this.getIndex(person);
    if (index === -1) {
      return;
    }

    this.collection.splice(index, 1);
  },

};

people.rollCall();
let carlo = { firstName: 'Max', lastName: 'Carlo' };
people.add(carlo);
people.rollCall();

