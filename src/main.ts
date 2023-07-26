type Address = {
  city: string;
  street: string;
  age: number;
}

type Person = {
  name: string;
  address: Address;
}

let arrData: Person[] = [
  {
    name: "Pablo",
    address: {
      city: "Seville",
      street: "Rosalia",
      age: 29
    }
  },
  {
    name: "Alba",
    address: {
      city: "Seville",
      street: "Rosalia",
      age: 31
    }
  }
];


function copyArr(person: Person[]): Promise<Person[]> {
  // Use JSON stringify and parse to create a deep copy
  let personCopy: Person[] = JSON.parse(JSON.stringify(person));

  return new Promise((resolve: (value?: Person[]) => void) =>
    resolve(personCopy)
  );
}

let deepCopy = copyArr(arrData);

deepCopy.then(result => {
  console.log("RESULT: ", result);

}).catch(error => {
  console.error("Error", error);
});
