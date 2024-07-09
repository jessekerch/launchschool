type Device = {
  manufacturer: string;
  model: string;
  year: number;
}

type mobileDevice = Device & { weight: number };

const computer: Device = {
  manufacturer: 'Apple',
  model: 'MacBook Pro',
  year: 2020,
}

const smartphone: mobileDevice = {
  manufacturer: 'Samsung',
  model: 'Galaxy',
  year: 2025,
  weight: 2.17,
}

const anotherSmartPhone: Device = smartphone;

function getWeight(device: Device | mobileDevice): string | number {
  if ('weight' in device) {
    return device['weight'];
  } else {
    return 'No weight available, not a mobile device';
  }
}

console.log(getWeight(computer));
