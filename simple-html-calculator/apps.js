const add = document.add
const sub = document.sub
const multi = document.multi
const firstOp = document.getElementById('firstOp')
const secondOp = document.getElementById("secondOp")
const thirdOp = document.getElementById("thirdOp")
const result = document.querySelector(".results")
const result2 = document.querySelector(".results2")
const result3 = document.querySelector(".results3")

add.addEventListener("submit", function(e){
    e.preventDefault()
    let equal = parseInt(add.add2.value) + parseInt(add.add3.value)
    result.textContent = equal
})

sub.addEventListener("submit" , function(e){
    e.preventDefault()
    let equal = parseInt(sub.sub2.value) - parseInt(sub.sub3.value)
    result2.textContent = equal

})

multi.addEventListener("submit", function(e){
    e.preventDefault()
   let equal = parseInt(multi.multi2.value) * parseInt(multi.multi3.value)
   result3.textContent = equal
})