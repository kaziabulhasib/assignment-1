
4.What is the use of enums in TypeScript? Provide an example of a numeric and string enum.

=>  
    Enums is short form of enumeration. Enums is one of the great features of TypeScript, it allows developers to define a set of constants so he/see can assign a specific value to a constant. suppose I choose a variable WeekEnds it must have either  Saturday or Sunday as option no other week of the day should not assign to the WeekEnds variable. We can do this like that 

            enum WeekEnds {
            firstOffDay= "Saturday",
            SecondOffDay= "Sunday"
            }

            let weekendDay: WeekEnds = WeekEnds.firstOffDay;

            console.log(weekendDay); // output----->Saturday

    --------------------

    numeric enum ---

            enum Ratings {
            veryBad : 1,
            band :2,
            average : 3,
            good :4,
            veryGood : 5
            }

            let productRating : Ratings =Ratings.good;
            console.log(productRating) ; // output :4



    string  enum --

            enum seats {
                expensive = "Business",
                budget    ="Economic "
            }

            let seatType : Seats =seats.expensive;
            console.log(seatType) ; // output : Business

-----------x----------------------

1. What are some differences between interfaces and types in TypeScript?

=>
    In TypeScript, both type and interface are used to define custom types, but they have different features and use cases that make each more suitable for specific scenarios.

   we use  type and interface  to define custom type in typescript , we can use any of them in some cases but they have some different features and uses cases that make each more suitable for specific scenarios.

    I will show some key differences between type and interface below 
        1 Extending types :
            Interface uses extends to inherit from another interface or type, while type uses & (intersection) to combine or inherit properties from other types or interfaces.

            example:

                interface Person {
                name: string;
                }
                interface Employee extends Person {
                id: number;
                }

                type PersonType = { name: string };
                type EmployeeType = PersonType & { id: number };
        
        2. Declaration Merging :

            Interfaces cab be extended after their initial declaration , this is called "declaration merging". This allows you to add new properties to an existing interface .

                interface Animal {
                name: string;
                }
                interface Animal {
                age: number;
                }
                const dog: Animal = { name: "Rex", age: 5 }; // maerging name with age property

            On the other hand types  Do not support declaration merging. Once a type is defined, it can't  extended.
        
        3.Flexibility and Capabilities:
            types are more flexible and can be used for a wider range of type definitions, including primitives, unions, intersections, and tuples.

                type ID = string | number;
                type Status = "pending" | "in-progress" | "completed";
                type Person = { name: string; age: number };
                type TupleType = [string, number];

            interfaces are  less flexible but offer better error messages and type checking performance. They are primarily used for defining object shapes and class contracts.

                interface Admin {
                role: "admin";
                }
                interface User {
                role: "user";
                }
                type AdminOrUser = Admin | User;
        
        4.Error Messages and Performance

            Interfaces generally provide better error messages and slightly better performance in the TypeScript compiler.

            types Can lead to more long and complex  error messages, especially with complex type definitions.


    in short ,we should u use interface when we need to define the shape of an object or a contract for a class, especially if we might extend it later. Interfaces also provide better error messages and performance. On the other hand, we should  type when we are working with  unions, intersections, or more complex type combinations. It's great for defining function types, tuples, and arrays, or when we want to create simpler names for long or complicated types.