# Assignment 1 Answers

## 1. What are some differences between interfaces and types in TypeScript?

In TypeScript, both `type` and `interface` are used to define custom types, but they have different features and use cases that make each more suitable for specific scenarios.

We use `type` and `interface` to define custom types in TypeScript. While they can sometimes be used interchangeably, there are important differences:

- **Extending Types:**

  - `interface` uses `extends` to inherit from another interface or type.
  - `type` uses `&` (intersection) to combine or inherit properties from other types or interfaces.

  ```typescript
  interface Person {
    name: string;
  }
  interface Employee extends Person {
    id: number;
  }

  type PersonType = { name: string };
  type EmployeeType = PersonType & { id: number };
  ```

- **Declaration Merging:**

  - Interfaces can be extended after their initial declaration. This is called "declaration merging" and allows you to add new properties to an existing interface.

  ```typescript
  interface Animal {
    name: string;
  }
  interface Animal {
    age: number;
  }
  const dog: Animal = { name: "Rex", age: 5 }; // merging name with age property
  ```

  - Types do **not** support declaration merging. Once a type is defined, it can't be extended.

- **Flexibility and Capabilities:**

  - `type` is more flexible and can be used for a wider range of type definitions, including primitives, unions, intersections, and tuples.

  ```typescript
  type ID = string | number;
  type Status = "pending" | "in-progress" | "completed";
  type Person = { name: string; age: number };
  type TupleType = [string, number];
  ```

  - `interface` is less flexible but offers better error messages and type checking performance. It is primarily used for defining object shapes and class contracts.

  ```typescript
  interface Admin {
    role: "admin";
  }
  interface User {
    role: "user";
  }
  type AdminOrUser = Admin | User;
  ```

- **Error Messages and Performance:**
  - Interfaces generally provide better error messages and slightly better performance in the TypeScript compiler.
  - Types can lead to longer and more complex error messages, especially with complex type definitions.

**Summary:**

- Use `interface` when you need to define the shape of an object or a contract for a class, especially if you might extend it later. Interfaces also provide better error messages and performance.
- Use `type` when working with unions, intersections, or more complex type combinations. It's great for defining function types, tuples, and arrays, or when you want to create simpler names for long or complicated types.

---

## 4. What is the use of enums in TypeScript? Provide an example of a numeric and string enum.

Enums (short for enumeration) are a great feature of TypeScript. They allow developers to define a set of named constants, making code more readable and less error-prone. For example, if you have a variable `WeekEnds`, it should only have either `Saturday` or `Sunday` as options. Enums help enforce this.

### Example: String Enum

```typescript
enum WeekEnds {
  firstOffDay = "Saturday",
  SecondOffDay = "Sunday",
}

let weekendDay: WeekEnds = WeekEnds.firstOffDay;
console.log(weekendDay); // Output: Saturday
```

### Example: Numeric Enum

```typescript
enum Ratings {
  veryBad = 1,
  bad = 2,
  average = 3,
  good = 4,
  veryGood = 5,
}

let productRating: Ratings = Ratings.good;
console.log(productRating); // Output: 4
```

### Example: String Enum (Seats)

```typescript
enum Seats {
  expensive = "Business",
  budget = "Economic",
}

let seatType: Seats = Seats.expensive;
console.log(seatType); // Output: Business
```

---
