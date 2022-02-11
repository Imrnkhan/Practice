// function factorial(n){
//     if (n == 0 || n == 1) return 1
//     return n * factorial(n-1)
// }
// console.log(factorial(6))





// var animal = ["cat","mankey","cow","dog"]
// // find the index 
// // console.log(animal.indexOf("cat"))

// // he is remove the index of frist element 
// // animal.shift()

// // adding on the frist index of element 
// // animal.unshift("doh")
// animal.splice(1,3,jun)
// console.log(animal)




function checkPalindrome(str,left,right){
    var str = "masai"
    if (left == right) return true
    if (str[left] != str[right]) return false
    return checkPalindrome(str,left+1,right-1)
}
checkPalindrome(str,left,right)