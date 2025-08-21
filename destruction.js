
let names = []

let users = [
  { name: "John", email: "john@example.com" },
  { name: "Jason", email: "jason@example.com" },
  { name: "Jeremy", email: "jeremy@example.com" },
  { name: "Jacob", email: "jacob@example.com" }
]


for (const { name } of users) {
  names.push(name);
}

console.log(names) // should log ["John", "Jason", "Jeremy", "Jacob"]


