type Circle = {
  kind: "circle";
  radius: number;
};

type Square = {
  kind: "square";
  sideLength: number;
};

type Shape = Circle | Square;

function assertNever(val: never): never {
  throw new Error('Error: argument is of unknown type');
}

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case 'circle': 
      return Math.PI * shape.radius ** 2;
      break;
    case 'square':
      return shape.sideLength ** 2;
      break;
    default:
      assertNever(shape);
  }
}

