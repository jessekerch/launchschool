type NameOptions = {
  firstName?: string;
  lastName?: string;
  title?: string;
};

function formatName(options: NameOptions): string {
  // Your implementation here
  return `${options.title ?? ''} ${options.firstName ?? 'John'} ${options.lastName ?? 'Doe'}`;
}

const formattedName = formatName({
  firstName: "Jane",
  lastName: "Smith",
  title: "Dr.",
});

console.log(formattedName); // "Dr. Jane Smith"
console.log(formatName({})); // John Doe