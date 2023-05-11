function sum(x, y){
    if (x % 1 === 0){
    //check data types first and throw error
    return x + y;
    } else throw "not a number"
}

try {
    sum(1, 2)
} catch (error) {
    console.log(error)
}

var user = {username: "sam", password: "123abc"};
function login(username, password){
    if (username === user.username && password === user.password){
        console.log("login successful!")
    } else throw "username or password is incorrect"
  //check credentials
}

try {
    login("sam", "123abc")
}

 catch (error) {
    console.log(error)
}
