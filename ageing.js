function afterNYears(obj, num) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      obj[key] += num;
    }
  }
  console.log(obj);
}

afterNYears({
  "Joel" : 32,
  "Fred" : 44,
  "Reginald" : 65,
  "Susan" : 33,
  "Julian" : 13
}, 1)

afterNYears({
  "Baby" : 2,
  "Child" : 8,
  "Teenager" : 15,
  "Adult" : 25,
  "Elderly" : 71
}, 19) 

afterNYears({
  "Genie" : 1000,
  "Joe" : 40
}, 5)