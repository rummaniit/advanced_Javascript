const elements = [3, 4, 5, 6]
// const array = []
// for (let i = 0; i < elements.length; i++) {
//     const element = elements[i]
//     const result = element * element
//     array.push(result)
// }
// console.log(array)


// const ans = element => element * element
// let res = ans(5)
// console.log(res);



// const output = elements.map(function (ele) {
//     return ele * ele
// })
// console.log(output);




// const result = elements.map(element => element + 2)
// console.log(result)

// const bigger = elements.filter(x => x > 5)
// console.log(bigger)

const person = [
    { id: 21, name: 'rumman' },
    { id: 22, name: 'shaon' },
    { id: 23, name: 'aminul' }
]
// let array = []
// for (let i = 0; i < person.length; i++) {
//     array.push(person[i].name)
// }
// console.log(array)
const res = person.map(s => s.name)
console.log(res)
const res2 = person.map(x => x.id)
console.log(res2)
const fil = person.filter(x => x.id > 21)
console.log(fil)
