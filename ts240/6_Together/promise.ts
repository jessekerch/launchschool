function sqrt(x: number): number {
  if (x < 0) {
    throw new Error("Cannot calculate square root of a negative number");
  }
  return Math.sqrt(x);
}

function safeSqrt(x: number): number {
  // Implement this function.
  try {
    return sqrt(x);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return -1;
    } else {
      throw error;
    }
  }
}

