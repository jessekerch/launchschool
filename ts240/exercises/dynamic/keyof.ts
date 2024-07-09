interface UserData {
  id: number;
  name: string;
  email: string;
}

const jkercheval: UserData = {
  id: 123,
  name: 'Jesse',
  email: 'jk@kerch.io'
}

function getKey(user: UserData, key: keyof UserData): void {
  if (key in user) {
    console.log(user[key]);
  } else {
    console.log(`The key ${key} isn't a property of that object.`);
  }
}

getKey(jkercheval, 'email');
getKey(jkercheval, 'full_name');

