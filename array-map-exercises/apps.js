
function doubleNumbers(arr){
    let nums = arr.map(function(num){
        return num * 2
        })
        return nums
}
  console.log(doubleNumbers([2, 5, 100]))

function stringItUp(arr){
    let strg = arr.map(function(num){
        return String(num)
    })
    return strg
  }
  
  console.log(stringItUp([2, 5, 100]));

function capitalizeNames(arr){
   return arr.map(function(letter){
    return letter.charAt(0).toUpperCase() + letter.slice(1).toLowerCase()
   })
    }


  
  console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 
  
  // Output:
  // ["John", "Jacob", "Jingleheimer", "Schmidt"]

function namesOnly(arr){
    let names = arr.map(function(user){
        return user.name
    })
    return names
    }
  
  console.log(namesOnly([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ]));
  // ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

  function makeStrings(ary){
    return ary.map(function (ary) {
        if (ary.age > 18) {
          return ary.name + " can go into the Matrix";
        } else return ary.name + " is under age";
      });
}
  
  console.log(makeStrings([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ]));
  // ["Angelina Jolie can go to The Matrix",
  // "Eric Jones is under age!!",
  // "Paris Hilton is under age!!",
  // "Kayne West is under age!!",
  // "Bob Ziroll can go to The Matrix"]  

function readyToPutInTheDOM(arr){
    let ary = arr.map(function(user){
        return "<h1>" + user.name + "</h1>" + "<h2>" + user.age + "</h2>"

    })
    return ary
  }

  
  console.log(readyToPutInTheDOM([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ]));
  // ["<h1>Angelina Jolie</h1><h2>80</h2>",
  // "<h1>Eric Jones</h1><h2>2</h2>",
  // "<h1>Paris Hilton</h1><h2>5</h2>",
  // "<h1>Kayne West</h1><h2>16</h2>",
  // "<h1>Bob Ziroll</h1><h2>100</h2>"]