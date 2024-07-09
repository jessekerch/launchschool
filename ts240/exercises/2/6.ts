interface Account {
  username: string,
  email: string,
  readonly accountId: number,
}

let AOL: Account = {
  username: 'chaba',
  email: 'chab@nibai.io',
  accountId: 5,
}

// AOL['accountId'] = 5;
AOL['accountDate'] = '5/6/78';
console.log(AOL['accountDate']);
console.log(AOL);
console.log(AOL.username);
