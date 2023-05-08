function fiveAndGreaterOnly(arr) {
    const nums = arr.filter(num => num >5)
    return nums
}
  console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]


  function evensOnly(arr) {
    const nums = arr.filter(num => num % 2 === 0)
    return nums
}

  console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]
  

  function fiveCharactersOrFewerOnly(arr) {
    const nameLgth = arr.filter(name => name.length <= 5)
    return nameLgth
}
  console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]


  function peopleWhoBelongToTheIlluminati(arr){
    const illuminati = arr.filter(function(person){
        if (person.member === true){
        return true
        }
})
 return illuminati
}
  console.log(peopleWhoBelongToTheIlluminati([
      { name: "Angelina Jolie", member: true },
      { name: "Eric Jones", member: false },
      { name: "Paris Hilton", member: true },
      { name: "Kayne West", member: false },
      { name: "Bob Ziroll", member: true }
  ]));
  // =>
  //[ { name: 'Angelina Jolie', member: true },
  //  { name: 'Paris Hilton', member: true },
  //  { name: 'Bob Ziroll', member: true } ]  

  
  function ofAge(arr){
    const people = arr.filter(person => person.age >= 18)
    return people
    
}
  console.log(ofAge([
      { name: "Angelina Jolie", age: 80 },
      { name: "Eric Jones", age: 2 },
      { name: "Paris Hilton", age: 5 },
      { name: "Kayne West", age: 16 },
      { name: "Bob Ziroll", age: 100 }
  ]));
  // =>
  //[ { name: 'Angelina Jolie', age: 80 },
  //  { name: 'Bob Ziroll', age: 100 } ]  