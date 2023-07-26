var arrData = [
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
function copyArr(person) {
    // Use JSON stringify and parse to create a deep copy
    var personCopy = JSON.parse(JSON.stringify(person));
    return new Promise(function (resolve) {
        return resolve(personCopy);
    });
}
var deepCopy = copyArr(arrData);
deepCopy.then(function (result) {
    console.log("RESULT: ", result);
}).catch(function (error) {
    console.error("Error", error);
});
