const people = {
  name: 'John',
  age: 30,
  weight: 88.6,
  isAdmin: true,
  fullName: 'John Doe',
  address: {
      street: 'Av Brasil',
      number: 320,
      city: 'Rio de Janeiro',
      state: 'RJ',
      country: 'Brasil'
  }
}


const people2 = { ...people }
people2.name = 'Maria'

console.table(people)
console.table(people2)
