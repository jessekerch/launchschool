function printId(val) {
    if (typeof val === 'string') {
        console.log('Your value is a string');
    }
    else if (typeof val === 'number') {
        console.log('Your value is a number');
    }
}
printId(101);
printId('101');
