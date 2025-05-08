function formatString(input: string, toUpper?: boolean): string {
  if (toUpper === false) {
    return input.toLowerCase();
  } else {
    return input.toUpperCase();
  }
}

// 2
type RatedItem = {
  title: string;
  rating: number;
};

function filterByRating(items: RatedItem[]): RatedItem[] {
  return items.filter((item) => item.rating >= 4);
}

// 3

function concatenateArrays<T>(...arrays: T[][]): T[] {
  return ([] as T[]).concat(...arrays);
}

// 4
class Vehicle {
  constructor(private make: string, private year: number) {}

  public getInfo(): string {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}

class Car extends Vehicle {
  constructor(make: string, year: number, private model: string) {
    super(make, year);
  }

  public getModel(): string {
    return `Model: ${this.model}`;
  }
}

// 5

function processValue(value: string | number): number {
  return typeof value === "string" ? value.length : value * 2;
}

// 6
interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) return null;
  return products.reduce((max, current) =>
    current.price > max.price ? current : max
  );
}

//   7

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  return day === Day.Saturday || day === Day.Sunday ? "Weekend" : "Weekday";
}

// 8

async function squareAsync(n: number): Promise<number> {
  if (n < 0) {
    throw new Error("Negative number not allowed");
  }
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return n * n;
}
