let animal1 = 'lion';

function zooSetup() {
  function roar() {
    console.log(`The ${animal1} roars!`)
  }
  
  function trumpet() {
    let animal2 = 'elephant';
    console.log(`The ${animal2} trumpets!`)
  }

  roar();
  trumpet();
}

zooSetup();

