interface Circle = {
  kind: 'circle';
  radius: number;
}

type Square = {
  kind: 'square';
  sideLength: number;
}

type Shape = Circle | Square;

function getArea(shape: Shape): number {
  switch(shape.kind) {
    case 'circle':
      return shape.radius * Math.PI ** 2;
      break;
    case 'square':
      return shape.sideLength ** 2;
      break;
    default:
      return 0;
      break;
  }
}

getArea({ kind: "circle", radius: 10 });
getArea({ kind: "square", sideLength: 10 });
