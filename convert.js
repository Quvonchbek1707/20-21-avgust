function objectToArray(obj) {
  let answer = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      answer.push([key, obj[key]]);
    }
  }
  answer.sort((a, b) => a[0].localeCompare(b[0]));
  console.log(answer);
}
objectToArray({
  D: 1,
  B: 2,
  C: 3
})

objectToArray({
  likes: 2,
  dislikes: 3,
  followers: 10
})