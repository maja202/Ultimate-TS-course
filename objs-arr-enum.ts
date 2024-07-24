

enum Role {
    ADMIN = 5,
    READ_ONLY,
    AUTHOR,
}

const person = {
    name: 'Maja',
    age: 23,
    hobbies: ['Music', 'Programming'],
    role: Role.AUTHOR
}

let favorites: any[]
favorites = [3, 'Apples']

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
}

console.log(person.role)