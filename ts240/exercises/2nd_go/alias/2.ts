(() => {

  type Contact = {
    firstName: string;
    lastName: string;
    age: number;
    isOnline: boolean;
  }

  type DatingContact = Contact & {
    isSingle: boolean;
  } 

  const JonDoe: Contact = {
    firstName: 'Jon',
    lastName: 'Doe',
    age: 52,
    isOnline: true,
  }

  const JaneDoe: DatingContact = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 52,
    isOnline: true,
    isSingle: false,
  }


})();


