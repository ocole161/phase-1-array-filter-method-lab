// Code your solution here
// function findMatching(array, string) {
//     let names = []
//     for (const name of array) {
//         if (name.toUpperCase() === string.toUpperCase()) {
//             names.push(name)
//         }
//     }
//     return names
// }

function findMatching(array, string) {
    return array.filter(
        function match(name) {
            return name.toUpperCase() === string.toUpperCase()
        }
    )
}

// function fuzzyMatch(array, string) {
//     let names = []
//     for (const name of array) {
//         if (name.slice(0,[string.length]) === string.slice(0,[string.length])) {
//             names.push(name)
//         }
//     }
//     return names
// }

// function matchName(array, string) {
//     let names = []
//         for (const iter of array) {
//             if (iter.name === string) {
//                 names.push(iter)
//             }
//         }
//     return names
// }

// const drivers = [
//     {
//       name: 'Bobby',
//       hometown: 'Pittsburgh' },
//     {
//       name: 'Sammy',
//       hometown: 'New York' } ,
//     {
//       name: 'Sally',
//       hometown: 'Cleveland' },
//     {
//       name: 'Annette',
//       hometown: 'Los Angeles' },
//     {
//       name: 'Bobby',
//       hometown: 'Tampa Bay' }
//   ];

// console.log(matchName(drivers, "Bobby"))

// const test = "test"
// console.log(test.length)
// console.log(test.slice(0,2))