const people = {
  name: 'John Doe',
  age: 32,
  gender: 'male',
  interests: ['music', 'skiing'],
  latlin: {
    lat: 123,
    long: 321,
  }
}

// const { name, age, gender, interests } = people;

// console.log(people.name)
// console.log(people.age)
// console.log(people.gender)

// console.log(name)
// console.log(age)
// console.log(gender)
// console.log(interests)

const useContext = ({ name, age, gender, latlin:{lat, long} }) => {
  return {
    userName: name,
    userAge: age,
    userGender: gender,
    userLat: lat,
    userLong: long,
  }
}

const result = useContext(people);

console.log(result)
