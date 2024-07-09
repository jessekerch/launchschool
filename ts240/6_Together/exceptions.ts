type NameOptions = {
  firstName?: string;
  lastName?: string;
  title?: string;
};

function formatName( {
    firstName = 'John',
    lastName = 'Doe',
    title = '',
  }: NameOptions): string {
  // Your implementation here
  return `${title}${firstName} ${lastName}`;
}

const formattedName = formatName({
  firstName: "Jane",
  lastName: "Smith",
  title: "Dr.",
});

console.log(formattedName); // "Dr. Jane Smith"
console.log(formatName({})); // John Doe