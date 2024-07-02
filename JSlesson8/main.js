// const userName = {
//     name: "Vlad",
//     age: 18,
//     city: "Ashdod"
// }

// const users = {
//     syHello(name){
//         console.log(`Hello ${name}`)
//     }
// }
//
// console.log(users)
// users.syHello('Ann')

const users = [
    {
        name: 'Alex',
        age: 20,
        isAdmine: false
    },
    {
        name: 'Jon',
        age: 42,
        isAdmine: true
    },
    {
        name: 'Bob',
        age: 33,
        isAdmine: true
    },
    {
        name: 'Ken',
        age: 19,
        isAdmine: false
    },
    {
        name: 'Ann',
        age: 25,
        isAdmine: true
    }
]

for (let i = 0; i < users.length; i++) {
    if (users[i].isAdmine) {
        users[i].isAdmine = true;
    }else {
        i = i + 1
    }
    console.log(users[i].isAdmine);
}

